import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Albumes} from '../../model/albumes';
import {TitlesTables} from '../../shared/models/titlesTables';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlbumesService} from '../../services/albumes.service';
import {Toast} from '../../shared/models/toast';
import {AddCommentService} from '../../services/add-comment.service';
import {Card} from '../../shared/models/card';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  album: Albumes;
  titlesTable: Array<TitlesTables>;
  form: FormGroup;
  review = '1,2,3,4,5'.split(',');
  reviewLabelSelect = '';
  warning: Toast;
  comment: Toast;
  reviewWarning: Toast;

  constructor(private activatedRoute: ActivatedRoute, private albumesService: AlbumesService, private build: FormBuilder,
              private addCommentService: AddCommentService) {
    this.titlesTable = new Array<TitlesTables>();
    this.titlesTable.push(new TitlesTables('Content'));
    this.titlesTable.push(new TitlesTables('Score'));
    this.form = this.build.group({
      comment: [undefined,
        [Validators.required]],
      review: [undefined, [Validators.required]],
      id: [undefined, [Validators.required ]],
    });
    this.warning = new Toast('warning.svg', 'Warning', 'You must fill out all fields', '#0d3300', false);
    this.comment = new Toast('', '', '', '#711B23', false);
    this.reviewWarning = new Toast('', '', '', '#711B23', false);
  }

  ngOnInit(): void {
    this.form.get('id').setValue(this.activatedRoute.snapshot.queryParams.id);
    this.getComments();
  }

  getComments(): void {
    const item: Array<Albumes> = this.albumesService.getAlbumes();
    this.album =  item.find(t => t.id == this.form.get('id').value);
  }

  goBack(): void {
    window.history.back();
  }

  saveText(text: string, key: string): void {
    this.form.get(key).setValue(text);
    this.showAlert(key);
  }

  onChangeReview(value: string): void{
    this.saveText(value, 'review');
  }

  showAlert(key): void  {
    switch (key) {
      case 'comment':
        if (this.form.get('comment').value === null || this.form.get('comment').value.length < 3 ){
          this.comment.image = 'warning.svg';
          this.comment.description = 'The comment should have the next: It must have with at least three letters and not get over 100 letters';
          this.comment.visible = true;
        } else {
          this.comment.visible = false;
        }
        break;
      case 'review':
        if (this.form.get('review').value === null  || this.form.get('review').value.length < 1 ){
          this.reviewWarning.image = 'warning.svg';
          this.reviewWarning.description = 'You should select a score';
          this.reviewWarning.visible = true;
        } else {
          this.reviewWarning.visible = false;
        }
        break;
    }
  }

  addComment(): void  {
    if ((this.form.get('review').value !== null  && this.form.get('review').value.length >= 1)
      && (this.form.get('comment').value !== null && this.form.get('comment').value.length >= 1 )) {
      this.warning.visible = false;
      const body = {
        description: this.form.get('comment').value,
        rating: 5,
        collector: {id: Number(this.form.get('id').value) }
      };
      this.addCommentService.addComment(body, this.form.get('id').value).subscribe(() => {
        this.updateAlbums();
        this.warning.title = 'Success';
        this.warning.image = 'check.svg';
        this.warning.background = '#a5dc86';
        this.warning.description = 'You process was success';
        this.warning.visible = true;
        window.scrollTo(0, 0);
      }, () => {
        this.warning.title = 'Error';
        this.warning.image = 'error.svg';
        this.warning.background = '#711B23';
        this.warning.description = 'Your process was wrong, you should try again please';
        this.warning.visible = true;
        window.scrollTo(0, 0);
      });
    }else  {
      this.warning.visible = true;
      this.showAlert('review');
      this.showAlert('comment');
    }
  }

  updateAlbums(): void {
    this.albumesService.getAlbumesServices().subscribe((result: Array<Albumes>) => {
      console.log(result);
      this.albumesService.setAlbumes(result);
      this.getComments();
    });
  }
}



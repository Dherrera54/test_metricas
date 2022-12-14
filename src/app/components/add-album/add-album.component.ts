import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InputText} from '../../shared/models/inputText';
import {Toast} from '../../shared/models/toast';
import {CreateAlbumService} from '../../services/create-album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss']
})
export class AddAlbumComponent implements OnInit {

  name: InputText;
  cover: InputText;
  releaseDate: InputText;
  form: FormGroup;
  comment: Toast;
  warning: Toast;
  error: Toast;
  recordsLabel = 'Sony Music,EMI,Discos Fuentes,Elektra,Fania Records'.split(',');
  recordLabelSelect = '';
  genreLabel = 'Classical,Salsa,Rock,Folk'.split(',');
  genreLabelSelect = '';

  constructor(private build: FormBuilder, private createAlbumService: CreateAlbumService) {
    this.form = this.build.group({
      name: [undefined,
        [Validators.required]],
      cover: [undefined, [Validators.required]],
      releaseDate: [undefined, [Validators.required ]],
      comment: [undefined, [Validators.required]],
      genre: [undefined, [Validators.required]],
      recordLabel: [undefined, [Validators.required]],
    });
    this.name = new InputText('Album Name', 'text', 'name',
      'Fill out the user', '#FFFFFF', 'none', '10px', '50px',
      new Toast('', '', '', '#711B23', false), 50, 5
      , '', /[^a-zA-Z ]/g);
    this.cover = new InputText('Cover', 'text', 'cover',
      'Fill out the image url ', '#FFFFFF', 'none', '10px', '50px',
      new Toast('', '', 'Your process was success', '#711B23', false), 50, 5
      , '');
    this.releaseDate = new InputText('Publication date', 'text', 'releaseDate',
      'Fill out the Publication date, the format must be the next yyyy-MM-dd', '#FFFFFF', 'none', '10px', '50px',
      new Toast('', '', 'Your process was success', '#711B23', false), 10, 5
      , '', /[^0-9-]/g);
    this.warning = new Toast('warning.svg', 'Warning', 'If you do not fill out all fields, the button would not be ' +
      'enabled ', '#0d3300', false);
    this.error = new Toast('error.svg', 'Warning', 'If you do not fill out all fields, the button would not be ' +
      'enabled', '#711B23', false);
    this.comment = new Toast('', '', '', '#711B23', false);
  }

  setValue(value: string, key: string): void {
     this.form.get(key).setValue(value);
     this.showAlert(key);
  }

  keyup(text: string): void {
    this.setValue(text, 'comment');
  }

  validURL(str): boolean {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  }

  showAlert(key): void  {
     switch (key) {
       case 'name':
         if (this.form.get('name').value.length < 3 ){
           this.name.border = '3px solid #711B23' ;
           this.name.error.image = 'warning.svg';
           this.name.error.description = 'The name should have the next: It must have with at least three letters and not get over 100 letters, also it can have only letters';
           this.name.error.visible = true;
         } else {
           this.name.border = 'none' ;
           this.name.error.visible = false;
         }
         break;
       case 'cover':
         if (this.form.get('cover').value.length < 5 || !this.validURL(this.form.get('cover').value)){
           this.cover.border = '3px solid #711B23' ;
           this.cover.error.image = 'warning.svg';
           this.cover.error.description = 'The url is not valid, you need to check it';
           this.cover.error.visible = true;
         } else {
           this.cover.border = 'none' ;
           this.cover.error.visible = false;
         }
         break;
       case 'releaseDate':
         if (this.form.get('releaseDate').value.length < 5
           || this.checkIsValidaDate(this.form.get('releaseDate').value) === null
           || this.checkIsValidaDate(this.form.get('releaseDate').value).length < 2 ){
           this.releaseDate.border = '3px solid #711B23' ;
           this.releaseDate.error.image = 'warning.svg';
           this.releaseDate.error.description = 'The date filled out wrong, It should have the next format: yyyy-MM-dd';
           this.releaseDate.error.visible = true;
         } else {
           this.releaseDate.border = 'none' ;
           this.releaseDate.error.visible = false;
         }
         break;
       case 'comment':
         if (this.form.get('comment').value.length < 3 ){
           this.comment.image = 'warning.svg';
           this.comment.description = 'The cover should have the next: It must have with at least three letters and not get over 100 letters, also it can have only letters';
           this.comment.visible = true;
         } else {
           this.comment.visible = false;
         }
         break;
     }
  }

  checkIsValidaDate(srt: string): RegExpMatchArray {
    return srt.match(/^\d{4}([-])\d{2}\1\d{2}$/);
  }

  addedAlbum(): void  {
    if (!this.name.error.visible && !this.cover.error.visible && !this.releaseDate.error.visible
      && this.form.get('genre').value.length > 3 && this.form.get('recordLabel').value.length > 3  && !this.comment.visible) {
      this.warning.visible = false;
      const body = {
        name: this.form.get('name').value,
          cover: this.form.get('cover').value,
          releaseDate: this.form.get('releaseDate').value + 'T00:00:00-00:00',
          description: this.form.get('comment').value,
          genre: this.form.get('genre').value,
          recordLabel: this.form.get('recordLabel').value
      };
      this.createAlbumService.createAlbum(body).subscribe((result) => {
        this.warning.title = 'Successful';
        this.warning.image = 'check.svg';
        this.warning.background = '#a5dc86';
        this.warning.description = 'Your process was successful';
        this.warning.visible = true;
        window.scrollTo(0, 0);
      }, (error: any) => {
        this.warning.title = 'Error';
        this.warning.image = 'error.svg';
        this.warning.background = '#711B23';
        this.warning.description = 'Your process was wrong, you should try again please';
        this.warning.visible = true;
        window.scrollTo(0, 0);
      });
    } else  {
      this.warning.description = 'You should fill out all fields, also you have pending fields. ';
      this.warning.visible = true;
      window.scrollTo(0, 0);
    }
  }


  onChangeSelectRecord(value: string): void{
    this.setValue(value, 'recordLabel');
  }

  onChangeGenre(value: string): void{
    this.setValue(value, 'genre');
  }

  cancel(): void {
    window.history.back();
  }

  ngOnInit(): void {
  }
}

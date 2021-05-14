import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Musician } from '../../model/performer';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicianService } from '../../services/musician.service';
import { Observable } from 'rxjs';
import { BandService } from '../../services/band.service';




@Component({
  selector: 'app-musician-create',
  templateUrl: './musician-create.component.html',
  styleUrls: ['./musician-create.component.scss']
})
export class MusicianCreateComponent implements OnInit {

  @Input() id:number;

  musicianForm:FormGroup;
  musicians : Musician[];

  constructor(private formBuilder: FormBuilder,
              private route:ActivatedRoute,
              private router: Router,
              private musicianService:MusicianService,
              private bandService:BandService) { }



  ngOnInit() {


    this.musicianService.getMusicians().subscribe(result => {
    this.musicians = result;});
    this.id = this.route.snapshot.params.id;

    this.musicianForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      image: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(8)]],
      birthDate:["",Validators.required]

    });
  };
  createMusician(newMusician: Musician){
    this.musicianService.createMusician(newMusician).subscribe(musician => {
      this.musicians.push(musician);
      console.warn("el musico fue creado", newMusician);
      this.addMusicianToBand(newMusician);
    });

    this.showSuccess(newMusician);

  };

  addMusicianToBand(newMusician: Musician){
    this.musicianService.getMusicians().subscribe(result => {
    this.musicians = result;})
    var musicianDetail = this.musicians.find(item => item.name == newMusician.name);
    this.bandService.addMusicianToBand(musicianDetail, musicianDetail.id,this.id).subscribe(musician => {
    this.musicians.push(musician);})
    console.warn(`el musico fue añadidoa banda con id ${this.id}`, musicianDetail);
    }
  showSuccess(musician:Musician) {

  }

  cancelCreation(){
    this.musicianForm.reset();
    window.history.back();
  };

}

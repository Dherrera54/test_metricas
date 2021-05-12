import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Musician } from '../../model/performer';



@Component({
  selector: 'app-musician-create',
  templateUrl: './musician-create.component.html',
  styleUrls: ['./musician-create.component.scss']
})
export class MusicianCreateComponent implements OnInit {
  musicianForm:FormGroup;
  formBuilder:FormBuilder;
  musician:Musician= new Musician()

  constructor() { }

  ngOnInit() {
    this.musicianForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      image: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(8)]],
      birthDate:["",Validators.required]

    });
  };
  createMusician(musicianForm){

  };
  cancelCreation(){

  };

}

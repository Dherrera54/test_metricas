import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Musician } from '../../model/performer';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicianService } from '../../services/musician.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-musician-create',
  templateUrl: './musician-create.component.html',
  styleUrls: ['./musician-create.component.scss']
})
export class MusicianCreateComponent implements OnInit {
  musicianForm:FormGroup;
  musicians : Musician[];

  constructor(private formBuilder: FormBuilder,
              private route:ActivatedRoute,
              private router: Router,
              private musicianService:MusicianService) { }



  ngOnInit() {
    this.musicianForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      image: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(8)]],
      birthDate:["",Validators.required]

    });
  };
  createMusician(newMusician: Musician){
    console.warn("el musico fue creado", newMusician);
    this.musicianService.createMusician(newMusician).subscribe(musician => {
    this.musicians.push(musician);
    });

    this.showSuccess(newMusician);

  };
  showSuccess(musician:Musician) {

  }

  cancelCreation(){
    window.history.back();
  };

}

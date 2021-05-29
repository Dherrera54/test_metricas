import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Musician, Band } from '../../model/performer';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicianService } from '../../services/musician.service';
import { BandService } from '../../services/band.service';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-musician-create',
  templateUrl: './musician-create.component.html',
  styleUrls: ['./musician-create.component.scss']
})
export class MusicianCreateComponent implements OnInit {

  @Input() id:number;

  musicianForm:FormGroup;
  musicians : Musician[] =[];
  band: Band = undefined ;


  constructor(private formBuilder: FormBuilder,
              private route:ActivatedRoute,
              private router: Router,
              private musicianService:MusicianService,
              private bandService:BandService,
              private toastr:ToastrService) { }



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
      this.showSuccessCreateMusician(newMusician);
      this.addMusicianToBand(newMusician);
    });



  };

  addMusicianToBand(newMusician: Musician){
    var bandName:string;
    this.musicianService.getMusicians().subscribe(result => {
    this.musicians = result;})
    this.bandService.getBandDetail(this.id).subscribe(result => {
    this.band = result;
    bandName=this.band.name;
  })

    var musicianDetail = this.musicians.find(item => item.name == newMusician.name);
    this.bandService.addMusicianToBand(musicianDetail, musicianDetail.id,this.id).subscribe(musician => {
    this.musicians.push(musician);})

    console.warn(`el musico fue añadidoa banda con id ${this.id}`, musicianDetail);
    this.showSuccessAddMusicianToBand( newMusician,bandName)

    this.musicianForm.reset();

  }
  showSuccessCreateMusician(musician:Musician) {
    this.toastr.success(`Musician ${musician.name} created!`,'Success musician creation');

  }
  showSuccessAddMusicianToBand(musician:Musician, band :string) {

    this.toastr.success(`Musician${musician.name} added to band ${band}!`,'Musician added to band');
  }


  cancelCreation(){
    this.musicianForm.reset();
    window.history.back();
  };

}

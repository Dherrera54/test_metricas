import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Prize, PerformerPrizes } from '../../model/prize';
import { Router, ActivatedRoute } from '@angular/router';
import { PrizesService } from '../../services/prizes.service';
import { ToastrService } from 'ngx-toastr';;


@Component({
  selector: 'app-prize-create',
  templateUrl: './prize-create.component.html',
  styleUrls: ['./prize-create.component.scss']
})
export class PrizeCreateComponent implements OnInit {

  @Input() id:number;

  prizesForm:FormGroup;
  prizesBandForm:FormGroup;
  prizes : Prize[]=[];
  performerPrize:PerformerPrizes;
  prizeName:string= "";

  constructor(private formBuilder: FormBuilder,
              private route:ActivatedRoute,
              private router: Router,
              private prizesServices:PrizesService,
              private toastr:ToastrService) { }

  ngOnInit() {
    this.prizesServices.getPrizes().subscribe(result => {
      this.prizes = result;})
    this.id = this.route.snapshot.params.id;

    this.prizesForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      organization: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(8)]],

    });
    this.prizesBandForm = this.formBuilder.group({ premiationDate:["",Validators.required] });
  }
  createPrize(newPrize:Prize){
    this.prizesServices.createPrize(newPrize).subscribe(prize => {
      this.prizes.push(prize);
      this.prizeName=prize.name;
      console.warn("el premio fue creado", newPrize);
      this.showSuccessCreatePrize(prize);
      this.prizesForm.reset()
    });
  }
  addPrizeToBand(newperformerprize:PerformerPrizes){
    this.prizesServices.getPrizes().subscribe(result => {
      this.prizes = result;})

      var prizeDetail = this.prizes.find(item => item.name == this.prizeName);

      this.prizesServices.addPriceToMusician(newperformerprize,prizeDetail.id,this.id).subscribe(prize => {
      this.performerPrize=prize;})
      this.prizesBandForm.reset()
      this.showSuccessAddPrizeToBand(prizeDetail);
  }
  showSuccessCreatePrize(prize:Prize) {
    this.toastr.success(`¡Premio ${prize.name} creado con exito!`,'Creación premio');

  }
  showSuccessAddPrizeToBand(prize:Prize) {

    this.toastr.success(`¡Premio ${prize.name} añadido con exito a banda!`,'Añadir premio a banda');
  }


  cancelCreation(){
    this.prizesForm.reset();
    window.history.back();
  };
}

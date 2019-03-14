import { Component, OnInit } from '@angular/core';
import { Onibus } from 'src/app/models/Onibus';
import { Resposta } from 'src/app/models/Resposta';
import { OnibusService } from '../../services/onibus.service'


declare var google: any;
@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css']
})
export class OnibusComponent implements OnInit {
  onibuses:Onibus[];
  fOnibuses:Onibus[];
  resposta:Resposta[];
  onibusesPositions:Object[];
  overlays: any[];
  rangevalues:Number[];
  fdatahora:Date[] = [new Date()];
  options: Object = {
    center: {lat: -22.903892, lng: -43.4628048},
    zoom: 10.5
  };

  constructor(private onibusService:OnibusService ) { }


  ngOnInit() {
    this.buscarOnibuses();
  }

  

  buscarOnibuses() {
     this.onibusService.getOnibuses().subscribe(res => {
          this.onibuses =  res
          // this.onibusesPositions = this.onibuses.map(onibus => {return { "lat" : onibus.latitude, "lng" : onibus.longitude }})
          ,this.fOnibuses = this.onibuses
          ,this.initOverlays()
          ,this.mountFilter()
          ,this.rangevalues = [0, this.fOnibuses.length - 1]
          ,this.fdatahora = this.onibuses.map(bus => bus.datahora)
        });
  } 

  changeRange(event){
    this.fOnibuses = this.onibuses.filter(bus => bus.id > event[0] &&  bus.id < event[1]);
    this.initOverlays()
  }

  initOverlays() {
    if(!!this.fOnibuses) {
        this.overlays =           
          this.fOnibuses.map(onibus =>  new google.maps.Marker({
                                          position: {lat: onibus.latitude, lng: onibus.longitude}, 
                                          title: "Linha :" + onibus.linha +", Velocidade :"+ onibus.velocidade}))
        ;
      }
  } 
  mountFilter(){
    if(!!this.onibuses) {
      this.fdatahora.push(...[this.onibuses[0].datahora,this.onibuses[this.onibuses.length-1].datahora])
    }

  }
}

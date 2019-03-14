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
  infoWindow: any;
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
          this.onibuses =  res.DATA.filter(this.filtrarOnibus).map((data,index) => new Onibus(index+1,data[0],data[1],data[2],data[3],data[4],data[5]))
          // this.onibusesPositions = this.onibuses.map(onibus => {return { "lat" : onibus.latitude, "lng" : onibus.longitude }})
          ,this.fOnibuses = this.onibuses
          ,this.initOverlays()
          ,this.mountFilter()
          ,this.rangevalues = [0, this.fOnibuses.length - 1]
          ,this.fdatahora = this.onibuses.map(bus => bus.datahora)
          console.log(this.fdatahora[0],this.fdatahora[this.onibuses.length -1])
        });
  }

  changeRange(event){
    this.fOnibuses = this.onibuses.filter(bus => bus.id > event[0] &&  bus.id < event[1]);
    this.initOverlays()
  }

  filtrarOnibus = (dado) => {
    return  dado[5] > 60 && typeof(dado[0]) === "string" && 
            typeof(dado[1]) === "string" && typeof(dado[2])  === "number"
            && typeof(dado[3])  === "number" && typeof(dado[4])  === "number"
            && typeof(dado[5])  === "number"
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
      console.log("fdatahora",this.fdatahora)
    }

  }
}

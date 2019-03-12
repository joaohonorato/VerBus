import { Component, OnInit } from '@angular/core';
import { Onibus } from 'src/app/models/Onibus';
import { Resposta } from 'src/app/models/Resposta';
import { OnibusService } from '../../services/onibus.service'

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css']
})
export class OnibusComponent implements OnInit {
  onibuses:Onibus[];
  resposta:Resposta[];
  onibusesPositions:Object[];
  options: any;
  overlays: any[];
  constructor(private onibusService:OnibusService ) { }

  filtrarOnibus = (dado) => {
    return  dado[5] > 60 && typeof(dado[0]) === "string" && 
            typeof(dado[1]) === "string" && typeof(dado[2])  === "number"
            && typeof(dado[3])  === "number" && typeof(dado[4])  === "number"
            && typeof(dado[5])  === "number"
  }   

  ngOnInit() {
    this.onibusService.getOnibuses().subscribe(res => {
                this.onibuses =  res.DATA.filter(this.filtrarOnibus).map((data,index) => new Onibus(index+1,data[0],data[1],data[2],data[3],data[4],data[5]))
                this.onibusesPositions = this.onibuses.map(onibus => {return { "lat" : onibus.latitude, "lng" : onibus.longitude }})
              });
    
  }

}

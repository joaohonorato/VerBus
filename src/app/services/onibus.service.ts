import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Onibus } from '../models/Onibus';
import { Observable } from 'rxjs';
import { Resposta } from '../models/Resposta';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {
  dataRioUrl:string = 'http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/obterTodasPosicoes';

  constructor(private http:HttpClient) { }

  getOnibuses():Observable<Resposta> {
    let a = this.http.get<Resposta>(this.dataRioUrl);
    return a;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Onibus } from '../models/Onibus';
import { Observable } from 'rxjs';
import { Resposta } from '../models/Resposta';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {
  dataRioUrl:string = 'http://localhost:8080/api/onibus';

  constructor(private http:HttpClient) { }

  getOnibuses():Observable<Onibus[]> { 
    return this.http.get<Onibus[]>(this.dataRioUrl);
  }
}

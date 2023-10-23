import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private Http:HttpClient) { }

  getTopHeadlines(){
    return this.Http.get<RespuestaTopHeadlines>('https://api.victorsanmartin.com/feriados/en.json')
  }
}
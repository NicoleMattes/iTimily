import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChamadaPostModel } from '../models/chamada.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChamadaService {
  URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public postChamada(chamada: ChamadaPostModel): Observable<string> {
    const body = chamada;
    return this.http.post<string>(`${this.URL}/chamadas/criar`, body)
  }
}

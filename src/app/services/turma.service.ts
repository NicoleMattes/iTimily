import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TurmaByTurmaIdModel } from '../models/turma-by-turma-id.model';
import { AlunoRelatorio } from '../models/aluno-relatorio.model';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getTurmaByProfessor(id: string): Observable<string> {
    let params = new HttpParams;
    params = params.append('professorId', id);
    return this.http.get<string>(`${this.URL}/turma/byProfessor`, {params: params})
  }

  public getTurmaByTurmaId(id: string): Observable<TurmaByTurmaIdModel> {
    let params = new HttpParams;
    params = params.append('turmaId', id);
    return this.http.get<TurmaByTurmaIdModel>(`${this.URL}/turma/turmaById`, {params: params})
  }

  public getRelatorio(id: string): Observable<AlunoRelatorio[]> {
    let params = new HttpParams;
    params = params.append('turmaId', id);
    return this.http.get<AlunoRelatorio[]>(`${this.URL}/relatorio/turma`, {params: params}) 
  }
}

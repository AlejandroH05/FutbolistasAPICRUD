import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Futbolista } from '../models/futbolista.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FutbolistasService {

  private baseUrl = `${environment.apiBaseUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  getFutbolistas(): Observable<Futbolista[]> {
    return this.http.get<Futbolista[]>(this.baseUrl);
  }

  crearFutbolista(futbolista: Futbolista): Observable<Futbolista> {
    return this.http.post<Futbolista>(this.baseUrl, futbolista);
  }

  actualizarFutbolista(id: string, futbolista: Futbolista): Observable<any> {
    const { _id, ...payload } = futbolista as any;
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }

  eliminarFutbolista(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}


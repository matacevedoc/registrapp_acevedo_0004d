import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpClient: HttpClient) { }

  listarUsuarios(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }

  CrearUsuario(newUsuario: Users): Observable<Users> {
    return this.httpClient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  BuscarUsuarioPorId(id: number): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/${id}`);
  }

  ActualizarUsuario(usuario: Users): Observable<Users> {
    return this.httpClient.put<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }

  EliminarUsuario(id: number): Observable<Users> {
    return this.httpClient.delete<Users>(`${environment.apiUrl}/usuarios/${id}`);
  }
}

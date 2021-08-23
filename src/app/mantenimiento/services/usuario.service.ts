import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario, UsuarioListResponse } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlBase = environment.urlUsuario;
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UsuarioListResponse> {
    const urlAllUser = `${this.urlBase}/mantenimiento/usuario/todos`;
    return this.http.get<UsuarioListResponse>(urlAllUser);
  }

  createUser(usuario: Usuario): Observable<any> {
    const urlCreateUser = `${this.urlBase}/mantenimiento/usuario/nuevo`;
    return this.http.post<any>(urlCreateUser, usuario);
  }
}

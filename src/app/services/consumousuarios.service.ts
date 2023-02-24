import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuariosRegistrados } from './UsuariosRegistrados';

@Injectable({
  providedIn: 'root'
})
export class ConsumousuariosService {

  SERVER_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}
  
  public getUsuarios(){
    return this.http.get<UsuariosRegistrados>(`${this.SERVER_URL}/usuarios`);
  }
}

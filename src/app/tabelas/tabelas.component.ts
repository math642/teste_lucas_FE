import { Component, OnInit } from '@angular/core';
import { ConsumousuariosService } from '../services/consumousuarios.service';
import { UsuariosRegistrados } from '../services/UsuariosRegistrados';

@Component({
  selector: 'app-tabelas',
  styleUrls: ['tabelas.component.css'],
  templateUrl: 'tabelas.component.html',
})

export class TabelasComponent implements OnInit {
  users: any;
  displayedColumns: string[] = ['id', 'login', 'nome', 'senha'];
  
  constructor(private user:ConsumousuariosService){}

  ngOnInit(): void {
    this.user.getUsuarios().subscribe((res: UsuariosRegistrados) => {
      this.users = res;
    });
  }
}
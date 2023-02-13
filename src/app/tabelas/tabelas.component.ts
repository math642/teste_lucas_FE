import { Component, OnInit } from '@angular/core';
import { ConsumousuariosService } from '../services/consumousuarios.service';
import { UsuariosRegistrados } from '../services/UsuariosRegistrados';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabelas',
  styleUrls: ['tabelas.component.css'],
  templateUrl: 'tabelas.component.html',
})

export class TabelasComponent implements OnInit {
  ELEMENT_DATA: UsuariosRegistrados[] = [];
  displayedColumns: string[] = ['Id', 'Login', 'Nome', 'Senha'];
  dataSource = new MatTableDataSource<UsuariosRegistrados>(this.ELEMENT_DATA);
  
  constructor(private service: ConsumousuariosService){}

  ngOnInit(): void {
      this.getAllUsuarios();
  }

  public getAllUsuarios(){
    let resp= this.service.getUsuarios();
    resp.subscribe(usuarios=>this.dataSource.data=usuarios as UsuariosRegistrados[]);
  }
}
import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  @Input() listaUsuario: Usuario[] = [];

  @Output() editUserEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  constructor() { }

  ngOnInit(): void {

  }

  onEditUser(usuario: Usuario) {
    this.editUserEvent.emit(usuario);
  }
}

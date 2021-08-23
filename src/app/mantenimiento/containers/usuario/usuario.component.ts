import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public showFormUser = false;
  public usuarioData!: Usuario;
  public listaUsuario: Usuario[] = [];

  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((val) => {
      this.listaUsuario = val.usuarios;
    });
  }

  onNewUser() {
    this.showFormUser = true;
  }

  onSaveUser(usuario: Usuario) {
    console.log(usuario);
    this.userService.createUser(usuario).subscribe((resp) => {
      console.log(resp);
      this.showFormUser = false;
      this.getAllUsers();
    });
  }

  onEditUser(usuario: Usuario) {
    this.usuarioData = usuario;
    this.showFormUser = true;
  }
}

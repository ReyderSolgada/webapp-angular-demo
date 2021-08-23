import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-mant',
  templateUrl: './usuario-mant.component.html',
  styleUrls: ['./usuario-mant.component.scss']
})
export class UsuarioMantComponent implements OnInit {

  @Input() usuarioData!: Usuario;
  @Output() saveUserEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombres: [null, Validators.required],
      login: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      esAd: [false],
      cambioContrasenia: [false],
      estado: [true],
    });
  }

  ngOnInit(): void {
    console.log(this.usuarioData);
  }

  onSaveUser() {
    const usuario: Usuario = {
      nombre: this.myForm.controls.nombres.value,
      login: this.myForm.controls.login.value,
      email: this.myForm.controls.email.value,
      clave: this.myForm.controls.password.value,
      esAd: this.myForm.controls.esAd.value ? 1 : 0,
      estado: {
        id: this.myForm.controls.estado.value ? 1 : 0,
      },
      cambioContrasenia: this.myForm.controls.cambioContrasenia.value,
    };
    this.saveUserEvent.emit(usuario);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  datosRegistro = {
    nombre: '',
    apellidos: '',
    correo: '',
    usuario: '',
    password: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  registro() {
    console.log(
      'nombre -> ' + this.datosRegistro.nombre,
      'apellidos -> ' + this.datosRegistro.apellidos,
      'correo -> ' + this.datosRegistro.correo,
      'usuario -> ' + this.datosRegistro.usuario,
      'contraseña -> ' + this.datosRegistro.password
    );
  }

  gotToLogin () {
this.router.navigate(["login"])
  }
}

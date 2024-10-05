import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

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

  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

  registro() {
    this.storage.set('user', this.datosRegistro);
  }

  gotToLogin() {
    this.router.navigate(['login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

export interface UserI {
  usuario: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }

  formLogin = {
    usuario: '',
    password: '',
  };

  iniciarSesion() {
    console.log('usuario: ', this.formLogin.usuario);
    console.log('password: ', this.formLogin.password);

    const newUser: NavigationExtras = {
      queryParams: {
        usuario: this.formLogin.usuario,

        password: this.formLogin.password,
      },
    };

    this.router.navigate(['/home'], newUser);

    this.storage.set('1Usuario', this.formLogin.usuario);
    this.storage.set('2contrasena', this.formLogin.password);
  }
}

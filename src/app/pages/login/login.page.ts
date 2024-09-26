import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

 export interface UserI {
  usuario: string,
    password: string,
}


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  formLogin = {
    usuario: '',
    password: '',
  };

  iniciarSesion() {
    console.log('usuario: ', this.formLogin.usuario);
    console.log('password: ', this.formLogin.password);

    const newUser: NavigationExtras = {
      queryParams:{
        usuario: this.formLogin.usuario,

        password: this.formLogin.password,
      }
    };

    this.router.navigate(['/home'], newUser);
  }
}

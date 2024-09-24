import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    const newUser = {
      usuario: this.formLogin.usuario,
      password: this.formLogin.password,
    };

    localStorage.setItem('auth-user', JSON.stringify(newUser));

    this.router.navigate(['/home']);
  }
}

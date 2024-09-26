  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
  })
  export class HomePage implements OnInit {
    userData = {
      usuario: '',
      password: '',
    };

    constructor(private rutaActiva: ActivatedRoute) {
      rutaActiva.queryParams.subscribe((params) => {
        if (params['usuario'] && params['password']) {
          this.userData.usuario = params['usuario'];
          this.userData.password = params['password'];
          console.log(params['usuario'], params['password']);
        }
      });
    }

    ngOnInit() {}
}

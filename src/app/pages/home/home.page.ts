import { Component, OnInit } from '@angular/core';

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

  constructor() {}
  ngOnInit() {
    const getUserData = localStorage.getItem('auth-user');

    this.userData = getUserData ? JSON.parse(getUserData) : null;
  }
}

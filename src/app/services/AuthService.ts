import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    isLoggedIn: boolean = false; // variável para verificar se o usuário está logado
    // isLoggedIn: boolean = true;

    constructor() { }

    // Método para verificar se o usuário está autenticado
    isAuthenticated(): boolean {
      return this.isLoggedIn;
    }

    // Método para fazer login
    login() {
      this.isLoggedIn = true;
    }

    // Método para fazer logout
    logout() {
      this.isLoggedIn = false;
    }
  }

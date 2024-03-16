import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  ingresar() {
    // Redirige al usuario a la página de inicio (home)
    this.router.navigate(['/home']);
  }
  registrar() {
    // Redirige al usuario a la página de inicio (home)
    this.router.navigate(['/register']);
  }
}

import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor (public authService: AuthService) {}

  user:any;

  show() {
    this.user = this.authService.people;
  }

  login() {
    this.authService.loginWithGoogle().then((res)=>{
      console.log(res);
    });
  }

  logout() {
    this.authService.logout();
  }
}

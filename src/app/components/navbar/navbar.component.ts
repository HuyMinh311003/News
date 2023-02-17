import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor (private authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.user$.subscribe(user => {
      this.user = user;
      console.log(user);
    })
  }

  user!: User | null;
  user$ = new Observable<User | null>;

  login() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }
}

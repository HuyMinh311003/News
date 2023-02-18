import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'News';

  constructor (private authService: AuthService) {}

  user!: User | null;
  user$ = new Observable<User | null>;

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.user$.subscribe(user => {
      this.user = user;
      console.log(user);
    })
  }
}

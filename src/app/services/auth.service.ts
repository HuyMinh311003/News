import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  user!: User | null;
  user$ = new Subject<User | null>;

  constructor(public auth: Auth) {
    onAuthStateChanged(this.auth, (user)=>{
      if(user) {
        this.user = user;
        this.user$.next(this.user);
      }
      else {
        this.user = null;
        this.user$.next(this.user);
      }
    })
  }

  async loginWithGoogle() {
    let provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  logout() {
    this.auth.signOut().then(() => {
      window.location.reload();
    });
  }
}

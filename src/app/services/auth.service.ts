import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  people:any;
  constructor(public auth: Auth) {
    onAuthStateChanged(this.auth, (user)=>{
    if(user != null) {
      this.people = user;
    }
    else {
      this.people = null;
    }
    })
  }

  async loginWithGoogle() {
    let provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  logout() {
    this.auth.signOut();
  }
}

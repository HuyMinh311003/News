import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private authService:AuthService) { }
  user:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) =>{
      onAuthStateChanged(this.authService.auth,(user)=>{
        if(user != null){
          resolve(true);
          this.user = user;
        }
        else{
          window.alert('Bạn chưa đăng nhập');
          resolve(false);
          this.user = null;
          this.router.navigate(['']);
        }
      })
    });
  }
}

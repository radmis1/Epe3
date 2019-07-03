import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/';
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {
  constructor(private AFauh: AngularFireAuth, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     
      return this.AFauh.authState.pipe(map(auth =>{

          if(isNullOrUndefined(auth)){
             
              return true
          }else{
            this.router.navigate(['home']);
            return false
          } 

      }))
    }
  
}

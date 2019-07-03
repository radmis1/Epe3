import { Component } from '@angular/core';
import {ActionSheetController, NavController} from '@ionic/angular';
import { AuthService } from "../servicios/auth.service";
import { userInfo } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public NavCtrl : NavController, public authservice: AuthService) {}


  irlogin(){
    this.NavCtrl.navigateForward('login');


  }

  onlogout(){
    this.authservice.logout();
    this.NavCtrl.navigateForward('login');

  }
prueba(){

  this.NavCtrl.navigateForward('prueba')

}


}

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from "../app/servicios/auth.service";
import {ActionSheetController, NavController} from '@ionic/angular';
import { userInfo } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Bodega',
      url: '/leer',
      icon: 'list'
    },
    {
      title: 'Agregar',
      url: '/prueba',
      icon: 'ios-add'
    },
    {
      title: 'Eliminar',
      url: '/eliminar',
      icon: 'ios-trash'
    },
    {
      title: 'Actualizar',
      url: '/actualizar',
      icon: 'md-create'
    },
    {
      title: 'Acerca De',
      url: '/acercade',
      icon: 'logo-angular'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public NavCtrl : NavController, public authservice: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  onlogout() {
    this.authservice.logout();
    this.NavCtrl.navigateForward('login');

  }
}

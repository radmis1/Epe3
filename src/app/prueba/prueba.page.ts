import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ChatsService, chat } from "../servicios/chats.service";
import { AngularFireAuth } from "@angular/fire/auth";




@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {


  constructor(private db: AngularFirestore, public chatservice: ChatsService, private AFauth: AngularFireAuth) { }

  nombre: string
  marca: string
  ano: string
  tipo: string
  numeroserie: string

  mydate = new Date().toISOString()

  /*
  var a=  this.AFauth.auth.currentUser.email
*/
  ngOnInit() {


  }

  prueba() {

    this.db.collection('Licores').doc(this.numeroserie).set({

      nombre: this.nombre,
      marca: this.marca,
      ano: this.ano,
      tipo: this.tipo,
      fecha: this.mydate

    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  constructor(private db: AngularFirestore) { }
  numero:string

  ngOnInit() {
  }

  
  eliminar(){

    this.db.collection('Licores').doc(this.numero).delete()
  }
}

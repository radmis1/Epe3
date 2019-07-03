import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {
  nombre:string
  marca: string
  ano:string
  tipo:string
  numeroserie:string
  mydate=new Date().toISOString()
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

  prueba(){
    this.db.collection('Licores').doc(this.numeroserie).update({
  
       
    nombre:this.nombre,
    marca: this.marca,
    ano:this.ano,
    tipo:this.tipo,
    fecha:this.mydate
  
    })
  
  
    }
    




}

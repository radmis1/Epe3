import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

export interface chat{
  nombre:string
  marca: string
  ano:string
  tipo:string
  decha:string
  id: string

}
@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private db:AngularFirestore) { }


  getChatRooms(){


     return this.db.collection('Licores').snapshotChanges().pipe(map(rooms =>{

        return rooms.map(a=>{
          const data =a.payload.doc.data() as chat;
           data.id=a.payload.doc.id;
          return data;

        })


     }))



  }


}

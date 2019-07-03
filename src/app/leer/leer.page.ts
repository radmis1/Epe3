import { Component, OnInit } from '@angular/core';
import { ChatsService, chat } from "../servicios/chats.service";
@Component({
  selector: 'app-leer',
  templateUrl: './leer.page.html',
  styleUrls: ['./leer.page.scss'],
})
export class LeerPage implements OnInit {
  public chatRooms:any=[];
  constructor(public chatservice:ChatsService) { }

  ngOnInit() {


    this.chatservice.getChatRooms().subscribe( chats =>{

      this.chatRooms=chats;
 })
  }

}

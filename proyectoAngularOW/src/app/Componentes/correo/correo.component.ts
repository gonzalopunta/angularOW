import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo:any;
  constructor() { 
    this.correo = {
      titulo: "correo",
      cuerpo: "correo, correo, correo, correo, correo, correo, correo, correo, correo, correo",
      emisor: ", correo",
      destinatario: "correo"
    }
  }

  ngOnInit() {

  }

}

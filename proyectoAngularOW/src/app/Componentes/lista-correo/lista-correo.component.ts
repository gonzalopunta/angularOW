import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correo',
  templateUrl: './lista-correo.component.html',
  styleUrls: ['./lista-correo.component.scss']
})
export class ListaCorreoComponent implements OnInit {

  correos: any[];

  constructor() {
    const correo1 = {
      titulo: "Primer correo",
      cuerpo: "correo, correo, correo, correo, correo, correo, correo, correo, correo, correo",
      emisor: "correo",
      destinatario: "correo",
      leido: true
    };
    const correo2 = {
      titulo: "Segundo correo",
      cuerpo: "correo, correo, correo, correo, correo, correo, correo, correo, correo, correo",
      emisor: "correo",
      destinatario: "correo",
      leido: false
    };
    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);
  }
  ngOnInit() {
  }

}

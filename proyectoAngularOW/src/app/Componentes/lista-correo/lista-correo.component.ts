import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correo',
  templateUrl: './lista-correo.component.html',
  styleUrls: ['./lista-correo.component.scss']
})
export class ListaCorreoComponent implements OnInit {

  correos: any[];
  responder: boolean;
  correoAResponder: any;

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
    this.correos.push({
      titulo: "Tercer correo",
      cuerpo: "correo, correo, correo, correo, correo, correo, correo, correo, correo, correo",
      emisor: "correo",
      destinatario: "correo",
      leido: true
    })
    this.correos.push({
      titulo: "Cuarto correo",
      cuerpo: "correo, correo, correo, correo, correo, correo, correo, correo, correo, correo",
      emisor: "correo",
      destinatario: "correo",
      leido: true
    })
    this.responder = false;
  }
  ngOnInit() {
  }

  clickResponder(correo) {
    correo.responder = !correo.responder;
  }

  accionRespuestaRapida(correo) {
    correo.responder = false;
  }
}

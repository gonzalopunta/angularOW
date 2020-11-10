import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CorreoComponent } from './Componentes/correo/correo.component';
import { ListaCorreoComponent } from './Componentes/lista-correo/lista-correo.component';
import { NuevoCorreoComponent } from './Componentes/nuevo-correo/nuevo-correo.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreoComponent,
    NuevoCorreoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

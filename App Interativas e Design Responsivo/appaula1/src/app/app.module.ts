import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './views/date/date.component';
import { MensagemComponent } from './views/mensagem/mensagem.component';
import { InterpolationComponent } from './views/interpolation/interpolation.component';
import { NomeComponent } from './views/nome/nome.component';
import { Exercicio2Component } from './views/exercicio2/exercicio2.component';
import { Exercicio3Component } from './views/exercicio3/exercicio3.component';
import { Exercicio4Component } from './views/exercicio4/exercicio4.component';
import { EventBindingComponent } from './views/event-binding/event-binding.component';
import { Exericio5Component } from './views/exericio5/exericio5.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';
import { FormsModule } from '@angular/forms';
import { Ex1NgIfComponent } from './views/ex1-ng-if/ex1-ng-if.component';
import { Ex2NgIfComponent } from './views/ex2-ng-if/ex2-ng-if.component';
import { ExemploNgforComponent } from './views/exemplo-ngfor/exemplo-ngfor.component';
import { Ex1NgforComponent } from './views/ex1-ngfor/ex1-ngfor.component';
import { Ex2NgforComponent } from './views/ex2-ngfor/ex2-ngfor.component';
import { ExemploNgswitchComponent } from './views/exemplo-ngswitch/exemplo-ngswitch.component';
import { Exercico1CanalComponent } from './views/exercico1-canal/exercico1-canal.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    MensagemComponent,
    InterpolationComponent,
    NomeComponent,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    EventBindingComponent,
    Exericio5Component,
    ExemploNgifComponent,
    Ex1NgIfComponent,
    Ex2NgIfComponent,
    ExemploNgforComponent,
    Ex1NgforComponent,
    Ex2NgforComponent,
    ExemploNgswitchComponent,
    Exercico1CanalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

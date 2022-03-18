import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './views/binding/binding.component';
import { Ex1Component } from './views/ex1/ex1.component';
import { Ex2Component } from './views/ex2/ex2.component';
import { Ex3Component } from './views/ex3/ex3.component';
import { Lista3ex1Component } from './views/lista3ex1/lista3ex1.component';
import { Lista3ex2Component } from './views/lista3ex2/lista3ex2.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Lista3ex1Component,
    Lista3ex2Component
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

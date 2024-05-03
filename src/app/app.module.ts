import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // Importa HeroDetailComponent aquí


// Importa el componente MessagesComponent desde el archivo 'messages/messages.component'
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    MessagesComponent,
    
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesComponent,
    HeroDetailComponent,
    AppRoutingModule, // Aquí se añade HeroDetailComponent a las declaraciones
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

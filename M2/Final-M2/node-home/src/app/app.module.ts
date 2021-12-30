import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HousesAvailableComponent } from './components/houses-available/houses-available.component';
import { EnterHomeComponent } from './components/enter-home/enter-home.component';
import { FormsModule } from '@angular/forms';

//Rutas
//import { app_routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HousesAvailableComponent,
    EnterHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   // app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas
import { APP_ROUTING } from './app.routes'; 

//Servicios
import { DashboardService } from './servicios/dashboard.service';

//Componentes
import { AppComponent } from './app.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { MapGoogleComponent } from './map-google/map-google.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    BlankComponent,
    DashboardComponent,
    FontawesomeComponent,
    MapGoogleComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home.component/home.component';
import { LoginComponent } from '../components/login.component/login.component';
import { PerfilComponent } from '../components/perfil.component/perfil.component';
import { SubsComponent } from '../components/subs.component/subs.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { routing } from '../app.routing';
import { appRoutingProvider } from '../app.routing';
import ServiceEmp from '../services/service.emp';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

@NgModule({
  declarations: 
  [
    App,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    SubsComponent

  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: 
  [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceEmp,
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }

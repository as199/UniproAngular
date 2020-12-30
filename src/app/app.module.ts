import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import { FormAddComponent } from './form-add/form-add.component';
import { HomeComponent } from './components/home/home.component';
import { ListCoursComponent } from './components/list-cours/list-cours.component';
import { AddCoursComponent } from './components/add-cours/add-cours.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FormAddComponent,
    HomeComponent,
    ListCoursComponent,
    AddCoursComponent
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

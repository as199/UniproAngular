import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { ListCoursComponent } from './components/list-cours/list-cours.component';
import { AddCoursComponent } from './components/add-cours/add-cours.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import { environment} from  '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ListCoursComponent,
    AddCoursComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

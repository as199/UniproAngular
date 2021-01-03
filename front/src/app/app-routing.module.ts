import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from "./components/home/home.component";
import {AddCoursComponent} from "./components/add-cours/add-cours.component";
import {ListCoursComponent} from "./components/list-cours/list-cours.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent,
    children:[
      {path: 'listCour', component: ListCoursComponent,
      children: [
        {path: 'addCour', component: AddCoursComponent},
        {path: 'editCour/:id', component: AddCoursComponent},
      ]},

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

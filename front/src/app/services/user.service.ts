import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cour} from "../components/models/cour";
import {Observable} from "rxjs";

export interface User{
  id: number;
  nom: string;
  prenom: string;
  role: string;
  email: string;
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:User[]= [
    {id:1,nom:'Dione',prenom:'Assane',role:'ADMIN',email:'admin@gmail.com',password:'passer'},
    {id:2,nom:'Sarr',prenom:'Fatou',role:'CLIENT',email:'client@gmail.com',password:'passer'},
    {id:3,nom:'faye',prenom:'modou',role:'CLIENT',email:'modou@gmail.com',password:'passer'},
  ];
  constructor( private http: HttpClient) { }
  findUserById(id: number): any {
    const user =this.users.find(
      (u: User)=>{
        return u.id == id;
      }
    )
  }

  getUserByEmail(email: string, pass: string):any{
    return this.users.find(
      (u: User) => {
        return u.email == email && u.password == pass;
      }
    );
  }

  postCours(cour: Cour): Observable <any> {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", cour);
  }

  putCours(cour: Cour,id: number): Observable <any>{
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, cour);
  }

  getOneCours(id: number): Observable <any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  deleteCours(id: number): Observable <any>{
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}

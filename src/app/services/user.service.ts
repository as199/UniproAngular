import { Injectable } from '@angular/core';

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
  constructor() { }
  findUserById(id: number):any {
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
}

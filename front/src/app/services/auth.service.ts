import {Injectable} from '@angular/core';
import {User, UserService} from "./user.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  connectedUser: User | any;
  constructor(private userService: UserService, private router: Router) { }
  isAuthentucated(){
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn)
        }, 1000);
      }
    );
  }
  login(email: string='',pwd: string=''){
    this.connectedUser = this.userService.getUserByEmail(email,pwd);
     if(!!this.connectedUser){
       sessionStorage.setItem('etat', 'connecter');
       this.router.navigate(['/home']);
     }
    console.log(this.loggedIn)
  }

  logout(){
    this.loggedIn = false;
    this.connectedUser = null;
    sessionStorage.setItem('etat', '')
    this.router.navigate(['/']);

  }
  getStatu(){
    return !!sessionStorage.getItem('etat');
  }
}

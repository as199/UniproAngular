import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  Onsubmit(formLogin: NgForm){
    console.log(formLogin.value);
    this.authService.login("admin@gmail.com","passer");
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './hearder.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}

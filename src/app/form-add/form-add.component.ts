import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Ajouter(formAdd: NgForm) {
    console.log(formAdd.value)
  }
}

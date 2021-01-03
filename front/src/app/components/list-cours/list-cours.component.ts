import { Component, OnInit } from '@angular/core';
import {DbManagerService} from "../../services/db-manager.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent implements OnInit {
  cours: any;

  constructor(private dbmanager: DbManagerService) {
    this.chargerTable();
  }

  ngOnInit(): void {
    this.dbmanager.refresh$.subscribe(
      ()=> {
        this.chargerTable();
      });
    this.chargerTable();
  }

  EditCours(id) {

  }
  chargerTable(){
    this.dbmanager.getAllCours().subscribe(
      (data)=>{
        this.cours = data['hydra:member'];
        console.log(data['hydra:member'])
      },error => {
        console.log(error)
      }
    )
  }

  DeleteCours(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dbmanager.deleteOneCours(id).subscribe(
          (res) =>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.chargerTable();
          },error => {
            Swal.fire(
              'Not Deleted!',
              'Your cours hasn\'t be deleted.',
              'error'
            )
          }
        )

      }
    })
  }
}

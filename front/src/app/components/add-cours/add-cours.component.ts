import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {DbManagerService} from "../../services/db-manager.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {
  itemValue ='';
  items: Observable<unknown[]>;
  libCours ='';
  detCours ='';
  css ='success';
  btnText = "Add";
  etat = 'add';
 editId: any;
   formText ='ajout';
  constructor(private dbmanager: DbManagerService,private activatedRoute: ActivatedRoute,private route: Router) {
  }

  ngOnInit(): void {




    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const id = params.id;
        this.dbmanager.getOneCours(+id).subscribe(
          (res)=>{
            this.detCours = res['details'];
            this.libCours = res['nomCours'];
            this.editId =res['id'];
            this.btnText ='Editer';
            this.etat = 'edite';
            this.formText = "édition";
            this.css ='warning';
            console.log(res);

          })
      },error => {});
  }
  Ajouter(formAdd: NgForm) {
    if (formAdd.value['etat'] == 'add'){
      console.log(formAdd.value)
      this.dbmanager.addCours(formAdd.value).subscribe(
        (data)=>{
          formAdd.resetForm();
          Swal.fire(
            'Added!',
            'Your cours has been added.',
            'success'
          )
        },error => {
          Swal.fire(
            'Error!',
            '\n' +
            'server access error.',
            'error'
          )
        }
      )
    }else{
      this.dbmanager.editCours(this.editId ,formAdd.value).subscribe(
        (data)=>{
          formAdd.resetForm();
          this.refreshParam();
          this.route.navigate(['/home/listCour']);
          Swal.fire(
            'Updated!',
            'Your cours has been updated.',
            'success'
          )
        },error => {
          Swal.fire(
            'Error!',
            '\n' +
            'server access error.',
            'error'
          )
        }
      )
    }


  }
  refreshParam(){
    setTimeout(()=>{
      this.detCours = '';
      this.libCours = '';
      this.btnText ='Ajouter';
      this.etat = 'add';
      this.formText = "ajout";
      this.css ='success';
    },2000)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Cour} from "../components/models/cour";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DbManagerService {
url = "http://127.0.0.1:8000/api";
  private _refresh$ = new Subject<any>();

  get refresh$(){
    return this._refresh$;
  }
  constructor(private http: HttpClient) { }

  getAllCours():Observable<any>{
   return  this.http.get(`${this.url}/cours`);
  }
  getOneCours(id: number):Observable<any>{
    return  this.http.get(`${this.url}/cours/${id}`);
  }

  deleteOneCours(id: number):Observable<any>{
    return  this.http.delete(`${this.url}/cours/${id}`);
  }
  addCours(cours: Cour):Observable<any>{
    return  this.http.post(`${this.url}/cours`,cours).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  editCours(id: number,cour: Cour):Observable<any> {
    return  this.http.put(`${this.url}/cours/${id}`,cour).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }
}

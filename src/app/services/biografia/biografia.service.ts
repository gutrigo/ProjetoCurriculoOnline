import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { Bio } from '../../models/bio';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BiografiaService {

  bio: any;
  // tslint:disable-next-line:member-ordering
  private apiUrl = 'http://localhost:8080/jersey/rest/cv/'; // URL to web api

  constructor(private http: HttpClient) {}
  /** GET User by id. Will 404 if id not found */
  getBio(): Observable<any> {
    return this.http.get(this.apiUrl);
    }
}

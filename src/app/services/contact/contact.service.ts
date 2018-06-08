import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { Bio } from '../../models/bio';
import { ContactServiceInterface } from '../../interfaces/contact-service-interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService implements ContactServiceInterface {

  private apiUrl = 'http://localhost:8080/jersey/rest/cv/'; // URL to web api

  constructor(private http: HttpClient) {}

  getContact(): Observable<any> {
    return this.http.get(this.apiUrl + 'contact', httpOptions);
  }

}


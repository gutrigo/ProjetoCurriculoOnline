import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { Bio } from '../../models/bio';
import { BioServiceInterface } from '../../interfaces/bio-service-interface';
import { Contact } from '../../models/contact';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BiografiaService implements BioServiceInterface {

  private apiUrl = 'http://localhost:8080/jersey/rest/cv/'; // URL to web api

  constructor(private http: HttpClient) {}

  getBio(): Observable<any> {
    return this.http.get(this.apiUrl);
    }

  getBioMock(): Bio {
    const bio = new Bio();
    bio.id = 0;
    bio.name = 'Gustavo Trigo';
    bio.picture = '../../assets/eu.jpg';
    bio.role = 'Desenvolvedor Web';
    bio.welcomeMessage = 'Fácil Aprendizado foco nos resultados e qualidade na entrega dos serviços.';

    return bio;

  }
}

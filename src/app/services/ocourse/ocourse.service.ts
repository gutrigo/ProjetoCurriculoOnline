import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { OcourseServiceInterface } from '../../interfaces/ocourse-service-interface';
import { OnlineCourse } from '../../models/ocourse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OcourseService implements OcourseServiceInterface {


  private apiUrl = 'http://localhost:8080/jersey/rest/cv/'; // URL to web api

  constructor(private http: HttpClient) {}

  getOcourses(): Observable<any> {
    return this.http.get(this.apiUrl + 'ocourse', httpOptions);
    }

  getOcourseMock(): OnlineCourse[] {
    const ocourses = new Array<OnlineCourse>();
    const online = new OnlineCourse();

    online.name = 'Udacity';
    online.major = 'Desenvolvimento Web Front-End';
    online.url = 'https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001';
    online.graduationyear = '2017';
    ocourses.push(online);

    const online2 = new OnlineCourse();
    online2.name = 'Alura';
    online2.major = 'HTTP: Etendendo a web por baixo dos panos';
    online2.url = 'https://cursos.alura.com.br/user/gtrigao/course/http-fundamentos/formalCertificate';
    online2.graduationyear = '2017';
    ocourses.push(online2);

    const online1 = new OnlineCourse();
    online1.name = 'Alura';
    online1.major = 'Marketing Digital: O primeiro passo antes de criar um site';
    online1.url = 'https://cursos.alura.com.br/user/gtrigao/course/primeiros-passos-antes-de-criar-um-site/formalCertificate';
    online1.graduationyear = '2017';
    ocourses.push(online1);

    return ocourses;
  }
}

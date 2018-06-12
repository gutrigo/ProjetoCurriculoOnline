import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { Bio } from '../../models/bio';
import { Skills } from '../../models/skills';
import { SchoolsServiceInterface } from '../../interfaces/schools-service-interface';
import { Schools } from '../../models/schools';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SchoolsServices implements SchoolsServiceInterface  {


  private apiUrl = 'http://localhost:8080/jersey/rest/cv/'; // URL to web api

  constructor(private http: HttpClient) {}

  getSchools(): Observable<any> {
    return this.http.get(this.apiUrl + 'schools');
    }
  getSchoolsMock(): Schools[] {
    const schools = new Array<Schools>();
    const s = new Schools();
    s.city = 'Rua Chui - Sp - São Paulo';
    s.degree = 'Técnico';
    s.graduationYear = '2018';
    s.major = 'Carreira Full Stack Angular + Java';
    s.name = 'AgilizeWare';
    s.url = 'http://www.programar.com.vc';
    schools.push(s);

    const s1 = new Schools();
    s1.city = 'Rua Vergueiro, 3185 - Vila Mariana, São Paulo - SP';
    s1.degree = 'Técnico';
    s1.graduationYear = '2016';
    s1.major = 'Java, Desenvolvimento Web';
    s1.name = 'Caelum';
    s1.url = 'https://www.caelum.com.br/curso-java-web';
    schools.push(s1);

    const s2 = new Schools();
    s2.city = 'Rua Vergueiro, 3185 - Vila Mariana, São Paulo - SP';
    s2.degree = 'Técnico';
    s2.graduationYear = '2016';
    s2.major = 'Orientação a Objetos';
    s2.name = 'Caelum';
    s2.url = 'https://www.caelum.com.br/curso-java-orientacao-objetos';
    schools.push(s2);

    const s3 = new Schools();
    s3.city = 'Praça da República, 128 - República, São Paulo - SP';
    s3.degree = 'Técnico';
    s3.graduationYear = '2008';
    s3.major = 'Cobol, CICS, DB2, Modelagem de Dados, JCL, Z/OS';
    s3.name = 'GPTI';
    s3.url = '';
    schools.push(s3);

    return schools;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Bio } from '../../models/bio';
import { Skills } from '../../models/skills';
import { SkillsServiceInterface } from '../../interfaces/skills-service-interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SkillsService implements SkillsServiceInterface {


  private apiUrl = 'http://localhost:8080/jersey/rest/cv/'; // URL to web api

  constructor(private http: HttpClient) {}

  getSkills(): Observable<any> {
    return this.http.get(this.apiUrl + 'skills');
    }

   // tslint:disable-next-line:no-shadowed-variable
  getSkillsMock(): Skills[] {
    const skill = new Skills();
    const skills = new Array<Skills>();
    skill.id = 0;
    skill.skill = 'HTML5';
    skills.push(skill);

    const skill1 = new Skills();
    skill1.id = 1;
    skill1.skill = 'CSS3';
    skills.push(skill1);

    const skill2 = new Skills();
    skill2.id = 2;
    skill2.skill = 'JavaScript';
    skills.push(skill2);

    const skill3 = new Skills();
    skill3.id = 3;
    skill3.skill = 'GruntJs';
    skills.push(skill3);

    const skill4 = new Skills();
    skill4.id = 4;
    skill4.skill = 'Bootstrap';
    skills.push(skill4);

    const skill5 = new Skills();
    skill5.id = 5;
    skill5.skill = 'Jquery';
    skills.push(skill5);5

    const skill6 = new Skills();
    skill6.id = 6;
    skill6.skill = 'Java';
    skills.push(skill6);

    const skill7 = new Skills();
    skill7.id = 7;
    skill7.skill = 'AngularJs';
    skills.push(skill7);

    const skill8 = new Skills();
    skill8.id = 8;
    skill8.skill = 'Angular';
    skills.push(skill8);

    return skills;
  }
}

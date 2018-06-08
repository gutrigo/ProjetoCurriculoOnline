import { Component, OnInit } from '@angular/core';
import { SchoolsServices } from '../../services/schools/schools.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { OcourseService } from '../../services/ocourse/ocourse.service';
import { Schools } from '../../models/schools';
import { OnlineCourse } from '../../models/ocourse';


@Component({
  selector: 'app-education',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  schools: Schools[];
  ocourses: OnlineCourse[];

  constructor(
    private _serviceSchools: SchoolsServices, private _serviceOcourse: OcourseService
  ) {}

  ngOnInit() {

    this._serviceSchools.getSchools().subscribe(school => {
      this.schools = school;
    });

    this._serviceOcourse.getOcourses().subscribe(ocourse => {
      this.ocourses = ocourse;
    });
  }
}

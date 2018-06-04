import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../services/schools/schools.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { OcourseService } from '../services/ocourse/ocourse.service';


@Component({
  selector: 'app-education',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  schools: any[];
  ocourses: any[];

  constructor(
    private _serviceSchools: SchoolsService, private _serviceOcourse: OcourseService
  ) {}

  ngOnInit() {

    this._serviceSchools.getSchools().subscribe(school => {
      this.schools = school;
    });

    this._serviceOcourse.getOcourse().subscribe(ocourse => {
      this.ocourses = ocourse;
    });
  }
}

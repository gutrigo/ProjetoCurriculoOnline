import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: any[];

  constructor(
    private _serviceProjects: ProjectsService
  ) {}

  ngOnInit() {
    this._serviceProjects.getProjects().subscribe(project => {
      this.projects = project;
    });
  }
}

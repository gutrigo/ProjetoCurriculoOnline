import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../../services/projects/projects.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];
  @Input() param: any;

  constructor(
    private _serviceProjects: ProjectsService
  ) {}

  ngOnInit() {
    this.getProjectsMock();
  }

  getProjectsMock() {
    this.projects = this._serviceProjects.getProjectsMock();
  }
}

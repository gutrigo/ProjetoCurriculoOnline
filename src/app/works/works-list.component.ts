import { Component, OnInit } from '@angular/core';
import { WorksService } from '../services/works/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.css']
})
export class WorksListComponent implements OnInit {
  works: any[];

  constructor(
    private _serviceWorks: WorksService
  ) {}

  ngOnInit() {
    this._serviceWorks.getWorks().subscribe(work => {
      this.works = work;
    });
  }
}

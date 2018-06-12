import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works/works.service';
import { Work } from '../../models/work';

@Component({
  selector: 'app-works',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.css']
})
export class WorksListComponent implements OnInit {
  works: Work[];

  constructor(
    private _serviceWorks: WorksService
  ) {}

  ngOnInit() {
      // this.getWorks();
      this.getWorksMock();
    }

  getWorksMock() {
    this.works = this._serviceWorks.getWorksMock();
  }

  /*getWorks() {
    this._serviceWorks.getWorks().subscribe(work => {
      this.works = work;
  });*/
}

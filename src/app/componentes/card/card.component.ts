import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() param: any;
  card: any;

  constructor() {}

  ngOnInit() {
    this.card = this.param;
  }

}

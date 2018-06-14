import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';
import { Exemplo } from '../../models/exemplo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() param: any;
  card: Exemplo;

  constructor() {}

  ngOnInit() {
    this.getParam();
    // console.log(this.card);
  }

  getParam() {
    this.card = this.param;
  }
}

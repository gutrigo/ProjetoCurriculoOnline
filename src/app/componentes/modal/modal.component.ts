import { Component, OnInit } from '@angular/core';
import { Exemplo } from '../../models/exemplo';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  exemplo: Exemplo;
  constructor() { }

  ngOnInit() {
    this.getExemplo();
  }
  getExemplo() {
    const e = new Exemplo();
    e.id = 0;
    e.title = 'Exemplo';
    e.dates = ' 01 teste - 02 teste';
    e.description = 'ahdsuashduahdaushdad';
    e.urlSite = 'www.google.com.br';
    e.imagesUrl = '../../assets/img_avatar3.png';

    this.exemplo = e;
    console.log(this.exemplo);
  }

}

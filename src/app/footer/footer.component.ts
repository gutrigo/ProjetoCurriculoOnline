import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactService } from '../services/contact/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  contact: any;

  constructor( private _serviceContact: ContactService ) {}

  ngOnInit() {
    this._serviceContact.getContact().subscribe(contact => this.contact = contact);
  }
}

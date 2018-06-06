import { Component, OnInit, HostListener } from '@angular/core';
import { BiografiaService } from '../services/biografia/biografia.service';
import { Bio } from '../models/bio';
import { Skills } from '../models/skills';
import { Observable } from 'rxjs/Observable';
import { ContactService } from '../services/contact/contact.service';
import { SkillsService } from '../services/skills/skills.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bio: Bio;
  contact: Contact;
  skills: Skills[];
  modal: boolean;

  constructor(
    private _serviceBio: BiografiaService,
    private _serviceContact: ContactService,
    private _serviceSkills: SkillsService
  ) {}

  ngOnInit() {
    this._serviceBio.getBio().subscribe(bio => (this.bio = bio));
    this._serviceContact
      .getContact()
      .subscribe(contact => (this.contact = contact));
    this._serviceSkills.getSkills().subscribe(skill => {
      this.skills = skill;
    });
  }
  // When the user clicks on the button, open the modal
  openModal() {
    this.modal = true;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {

    const modal = this.newMethod();
    const btnClose = document.getElementById('close');

    if (event.target === modal || event.target === btnClose) {
      this.modal = false;
    }
  }

  private newMethod() {
    return document.getElementById('myModal');
  }
}

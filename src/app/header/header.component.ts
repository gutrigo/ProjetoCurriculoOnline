import { Component, OnInit } from '@angular/core';
import { BiografiaService } from '../services/biografia/biografia.service';
import { Bio } from '../models/bio';
import { Skills } from '../models/skills';
import { Observable } from 'rxjs/Observable';
import { ContactService } from '../services/contact/contact.service';
import { SkillsService } from '../services/skills/skills.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  bio: any;
  contact: any;
  skills: any[];

  constructor( private _serviceBio: BiografiaService, private _serviceContact: ContactService,
                private _serviceSkills: SkillsService) {}

  ngOnInit() {
    this._serviceBio.getBio().subscribe(bio => this.bio = bio);
    this._serviceContact.getContact().subscribe(contact => this.contact = contact);
    this._serviceSkills.getSkills().subscribe(skill => {
      this.skills = skill;
    });
  }
}

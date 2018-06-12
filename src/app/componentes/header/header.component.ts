import { Component, OnInit, HostListener } from '@angular/core';
import { BiografiaService } from '../../services/biografia/biografia.service';
import { Bio } from '../../models/bio';
import { Skills } from '../../models/skills';
import { Observable } from 'rxjs/Observable';
import { ContactService } from '../../services/contact/contact.service';
import { SkillsService } from '../../services/skills/skills.service';
import { Contact } from '../../models/contact';
import { Exemplo } from '../../models/exemplo';

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
  library: boolean;


  constructor(
    private _serviceBio: BiografiaService,
    private _serviceContact: ContactService,
    private _serviceSkills: SkillsService
  ) {}

  ngOnInit() {
    /*this.getBio();
    this.getContact();
    this.getSkills();*/
    /// this.getExemplo();
    this.getBioMock();
    this.getContactMock();
    this.getSkillsMock();
  }

  private getSkillsMock() {
    this.skills = this._serviceSkills.getSkillsMock();
  }

  private getContactMock() {
    this.contact = this._serviceContact.getContactMock();
  }

  private getBioMock() {
    this.bio = this._serviceBio.getBioMock();
  }

  // When the user clicks on the button, open the modal
  openModal() {
    this.modal = true;
  }
  // When the user clicks on the button, open the modal
  openLibrary() {
      this.library = true;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modal = this.getModal();
    const btnClose = this.getBtnClose();
    if (event.target === modal || event.target === btnClose) {
      this.modal = false;
      this.library = false;
    }
  }

  private getModal() {
    return document.getElementById('myModal');
  }
  private getBtnClose() {
    return document.getElementById('close');
  }

   /* private getSkills() {
    this._serviceSkills.
    getSkills().subscribe(skill => this.skills = skill,
      error => console.log(error),
      () => console.log('getSkills Complete!'));
  }*/

    /*private getContact() {
    this._serviceContact
      // tslint:disable-next-line:max-line-length
      .getContact().subscribe(contact => this.contact = contact,
        error => console.log(error),
        () => console.log('getContact Complete!'));
  }*/

  /*private getBio() {
    this._serviceBio.getBio().
      subscribe(bio => this.bio = bio,
        error => console.log(error),
        () => console.log('getBio Complete!'));
  }*/

}

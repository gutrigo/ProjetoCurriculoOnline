import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProjectsListComponent } from './componentes/projects/projects-list.component';
import { EducationListComponent } from './componentes/education/education-list.component';
import { MapDivComponent } from './componentes/map-div/map-div.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { WorksListComponent } from './componentes/works/works-list.component';
import { BiografiaService } from './services/biografia/biografia.service';
import { ContactService } from './services/contact/contact.service';
import { SkillsService } from './services/skills/skills.service';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { WorksService } from './services/works/works.service';
import { ProjectsService } from './services/projects/projects.service';
import { SchoolsServices } from './services/schools/schools.service';
import { OcourseService } from './services/ocourse/ocourse.service';
import { ModalComponent } from './componentes/modal/modal.component';
import { CardComponent } from './componentes/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsListComponent,
    EducationListComponent,
    MapDivComponent,
    FooterComponent,
    WorksListComponent,
    ModalComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BiografiaService, HttpClient, ContactService, SkillsService, WorksService, ProjectsService, SchoolsServices, OcourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

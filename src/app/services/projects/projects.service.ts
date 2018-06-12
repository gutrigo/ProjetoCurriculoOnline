import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { Bio } from '../../models/bio';
import { Skills } from '../../models/skills';
import { ProjectsServiceInterface } from '../../interfaces/projects-service-interface';
import { Project } from '../../models/project';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectsService implements ProjectsServiceInterface {


  private apiUrl = 'http://localhost:8080/jersey/rest/cv/'; // URL to web api

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get(this.apiUrl + 'projects');
    }
  getProjectsMock(): Project[] {
    const p = new Project();
    const projects = new Array<Project>();
    p.id = 0;
    p.title = 'Descontos Happy';
    p.dates = 'jan 2018 - mar de 2018';
    p.description = 'Somos uma plataforma de soluções para o varejo físico,'
    + 'que possui sistemas interativos e gamificados de mobile marketing, IoT (internet das coisas)'
    + 'e CRM, direcionados para o relacionamento e fidelização de clientes, engajamento de marcas, aumento de...)';
    p.imagesUrl = '../../assets/descontosHappy.jpg';
    p.urlSite = 'http://www.descontoshappy.com.br/';
    projects.push(p);

    const p1 = new Project();
    p1.id = 0;
    p1.title = 'App Passaregua';
    p1.dates = 'fev de 2018 – mai de 2018.';
    p1.description = 'Simplificar a vida de pequenos comércios como bares, restaurantes, food trucks e salões facilitando'
    + 'o fechamento das contas e dando informações para aumentar as vendas: é para isso que o nosso APP existe! Por meio dele,'
    + 'é possível fechar cada conta e o caixa no final da noite sem ter aquela dor de cabeça para contar comanda por comanda, '
    + 'conferir se as vendas no cartão foram pagas corretamente pelas empresas de cartão e visualizar os números do negócio da'
    + 'forma mais simples.';
    p1.imagesUrl = '../../assets/passaregua.png';
    p1.urlSite = 'http://www.passaregua.com.br/';

    projects.push(p1);

    const p2 = new Project();
    p2.id = 0;
    p2.title = 'Noix! Skateboard';
    p2.dates = 'dez 2017';
    p2.description = 'Nós amamos tecnologia, arte, fotografia, musica, e muito Skateboard ! Criado para compartilhamento'
    + 'de picos e pistas pelo brasil e também para fortalecer a cena do skate com eventos, premiações e muita diversão !!!';
    p2.imagesUrl = '../../assets/noix-app.png';
    p2.urlSite = 'www.noixskateboard.com.br';

    projects.push(p2);

    return projects;
  }
}

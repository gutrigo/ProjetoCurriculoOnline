import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Bio } from '../../models/bio';
import { Skills } from '../../models/skills';
import { WorksServiceInterface } from '../../interfaces/works-service-interface';
import { Work } from '../../models/work';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WorksService implements WorksServiceInterface {


  private apiUrl = 'http://localhost:8080/jersey/rest/cv/'; // URL to web api

  constructor(private http: HttpClient) {}

  getWorks(): Observable<any> {
    return this.http.get(this.apiUrl + 'works');
    }

  getWorksMock (): Work[] {

    const works = new Array<Work>();

    const w = new Work();
    w.id = 0;
    w.dates = 'dez de 2016 - até o momento.';
    w.description = 'Principais Atividades: Modelagem de dados, criação e manutenção de JCL e estrutura no CONTROL-M,' +
    'desenvolvimento em COBOL, IMS, CICS, DB2, Java, Javascript, HTML5, CSS3 e proccedures em sql. Controle de evolução e' +
    'gestão de projetos.';
    w.employer = 'Wipro';
    w.title = 'Analista de Sistemas Sr';
    w.location = 'Av. Andrômeda, 5700 - Alphaville Empresarial, Barueri - SP';
    works.push(w);

    const w1 = new Work();
    w1.id = 1;
    w1.dates = 'jan de 2018 - mar de 2018.';
    w1.description = 'Desenvolvimento de aplicação mobile utilizando Angular4 e IONIC, integração com backend NodeJs.';
    w1.employer = 'Agência de Tecnologia Agilizeware do Brasil';
    w1.title = 'Desenvolvedor Web Freelancer';
    w1.location = 'Rua Chui - Sp - São Paulo';
    works.push(w1);

    const w2 = new Work();
    w2.id = 2;
    w2.dates = 'fev de 2018 – mai de 2018.';
    w2.description = 'App PassaRegua AgilizeWare. Atuação Freelancer no desenvolvimento frontend de funcionalidades do aplicativo';
    w2.employer = 'Agência de Tecnologia Agilizeware do Brasil';
    w2.title = 'Desenvolvedor Web Freelancer';
    w2.location = 'Rua Chui - Sp - São Paulo';
    works.push(w2);

    const w3 = new Work();
    w3.id = 3;
    w3.dates = 'jul de 2014 - dez de 2016.';
    w3.description = 'Modelagem de dados, carga e manutenção em tabelas DB2, criação e execução de BACKUPS, REORGS, RUNSTATS,'
    + 'COPYS e LOADS, criação e manutenção de JCL e estrutura no CONTROL-M,'
    + 'desenvolvimento em COBOL, IMS, CICS e DB2, JAVA, Javascript, HTML5, CSS3 Integration service e proccedures em sql.';
    w3.employer = 'TODO!';
    w3.title = 'Analista de Sistemas Sr';
    w3.location = 'Av. Andrômeda, 5700 - Alphaville Empresarial, Barueri - SP';
    works.push(w3);

    const w4 = new Work();
    w4.id = 4;
    w4.dates = 'nov de 2012 - jul de 2014.';
    w4.description = 'Principais Atividades: Desenvolvimento em COBOL, CICS e DB2, levantamento das regras de negocio e dos'
    + 'requisitos necessários para o desenvolvimento do sistema, resolução de incidentes, criação e execução de roteiros de'
    + 'teste batch, evidencias de teste, fluxo de processamento das rotinas, controle de evolução'
    + 'preparação de ambiente desde cargas iniciais e manutenção em tabelas DB2 à criação dos Jobs e estrutura no CONTROL-M,'
    + 'acompanhamento e suporte na execução das rotinas diárias nos ambientes de TI e TH (Teste integrado e Homologação).';
    w4.employer = 'Capgemini';
    w4.title = 'Analista de Sistemas Mainframe';
    w4.location = 'Alameda Araguaia - Barueri-Sp';
    works.push(w4);

    const w5 = new Work();
    w5.id = 5;
    w5.dates = 'abr de 2012 - nov de 2012.';
    w5.description = 'Desenvolvimento em COBOL, CICS e DB2, levantamento das regras de negocio e dos requisitos necessários'
    + ' para o desenvolvimento do sistema, resolução de incidentes, criação e execução de roteiros de teste batch, evidencias'
    + 'de teste, fluxo de processamento das rotinas, controle de evolução, preparação de ambiente desde cargas iniciais e'
    + 'manutenção em tabelas DB2 à criação dos Jobs e estrutura no CONTROL-M, acompanhamento e suporte na execução das rotinas'
    + 'diárias nos ambientes de Teste integrado e Homologação.';
    w5.employer = 'Capgemini';
    w5.title = 'Programador PL';
    w5.location = 'Alameda Araguaia - Barueri-Sp';
    works.push(w5);

    const w6 = new Work();
    w6.id = 6;
    w6.dates = 'fev de 2011 - abr de 2012.';
    w6.description = 'Atuação em fabrica de software, desenvolvimento em Cobol, CICS, DB2 e criação de JCL.';
    w6.employer = 'Capgemini';
    w6.title = 'Programador Jr';
    w6.location = 'Alameda Araguaia, Barueri - SP';
    works.push(w6);

    const w7 = new Work();
    w7.id = 7;
    w7.dates = 'set de 2010 - fev de 2011.';
    w7.description = 'Documentação, criação e implementação de querys, análise de tabelas para modelagem de dados,'
    + 'levantamento das regras de negócio do cliente. Criação, alteração, atualização e carga em tabelas SQL-SERVER'
    + 'com informações extraídas das bases mainframe(DB2) utilizando linguagem TSQL.';
    w7.employer = 'Carriers Interconnect';
    w7.title = 'Analista BI';
    w7.location = 'Rua Hadock Lobo - São Paulo-Sp';
    works.push(w7);

    const w8 = new Work();
    w8.id = 8;
    w8.dates = 'dez de 2009 - jun de 2010.';
    w8.description = 'Suporte a produção do Sistema de Faturamento, Análise de JOBS, instruções para retomadas de'
    + 'processamento, montagem de JCL para processamentos especiais e montagem de Schedule. Banco de dados: Acesso'
    + 'as tabelas DB2 via SQL.';
    w8.employer = 'Carriers Interconnect';
    w8.title = 'Trainne';
    w8.location = 'Rua 7 de abril - São Paulo-Sp';
    works.push(w8);

    return works;
  }
}

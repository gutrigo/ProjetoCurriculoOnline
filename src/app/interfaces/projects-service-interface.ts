import { Observable } from 'rxjs/Observable';

export interface ProjectsServiceInterface {
  getProjects(): Observable<any>;
}

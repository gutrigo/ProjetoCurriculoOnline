import { Observable } from 'rxjs/Observable';

export interface WorksServiceInterface {
  getWorks(): Observable<any>;
}

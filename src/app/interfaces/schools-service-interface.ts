import { Observable } from 'rxjs/Observable';

export interface SchoolsServiceInterface {
  getSchools(): Observable<any>;
}

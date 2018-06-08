import { Observable } from 'rxjs/Observable';

export interface ContactServiceInterface {
  getContact(): Observable<any>;
}

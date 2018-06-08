import { Observable } from 'rxjs/Observable';

export interface OcourseServiceInterface {
  getOcourses(): Observable<any>;
}

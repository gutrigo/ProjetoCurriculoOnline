import { Bio } from '../models/bio';
import { Observable } from 'rxjs/Observable';

export interface BioServiceInterface {
  getBio(): Observable<any>;
}

import { Observable } from 'rxjs/Observable';

export interface SkillsServiceInterface {
  getSkills(): Observable<any>;
}

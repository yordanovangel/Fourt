import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  getUsers(): any {
    return this.http.get('/api/users');
    /*  .subscribe(result => {
      console.log(result);
    });*/
    /* .map((response: Response) => response.json());*/
  }
}

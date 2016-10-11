import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Poll } from './poll';
import { Observable } from 'rxjs/Observable';
import './rxjs-operators';

@Injectable()
export class AllPollsService {
  private heroesUrl = 'app/allPolls';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getPolls(): Observable<Poll[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
  // In a real world app, we might use a remote logging infrastructure
  // We'd also dig deeper into the error to get a better message
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}

}

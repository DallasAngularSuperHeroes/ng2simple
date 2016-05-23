import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import {Member} from './member';

@Injectable()
export class MemberListService {

  members: Member[] = [];

  private request: Observable<any>;

  constructor(private http: Http) {}

  init(): Observable<Member[]> {
    if (this.members && this.members.length) {
      return Observable.from([this.members]);
    }
    if (!this.request) {
      this.request = this.http.get('/data/meetupMembers.json')
          .map((response: Response) => response.json())
          .map((data: any) => {
            this.request = null;
            return this.members = data.results;
          });
    }
    return this.request;
  }

  get(): Observable<Member[]> {
    if (this.members && this.members.length) {
      return Observable.from([this.members]);
    }
    if (!this.request) {
      this.request = this.http.get('/data/meetupMembers.json')
        .map((response: Response) => response.json())
        .map((data: any) => {
          this.request = null;
          return this.members = data.results;
        });
    }
    return this.request;
  }



  getMember(id:number): Member {
    if (!this.members) {
      this.get();
    }
          return _.find(this.members, {id: id});
  }

}


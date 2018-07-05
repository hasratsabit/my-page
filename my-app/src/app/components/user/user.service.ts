import { User } from './user';
import { SharedService } from './../shared/shared.service';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  public domain: string = this._sharedService.domain;

  constructor(
    private _sharedService: SharedService,
    private _http: Http
  ) { }

  registerUser<Observable>(user: User) {
    return this._http.post(this.domain + '/users', user).map(res => res.json())
  }

}

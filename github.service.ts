import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';
import { Injectable } from '@angular/core';

@Injectable()
export class GitHubService{
  constructor(private _http: HttpClient){

  }

  getGitHubData(_searchTerm: string) :Observable<Result>{
    return this._http.get<Result>
    ("http://api.github.com/search/users?q="+_searchTerm);
  }
}

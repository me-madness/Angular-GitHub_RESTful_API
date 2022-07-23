import { Component } from '@angular/core';
import { GitHubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GitHubService]
})
export class AppComponent {

  constructor(private _githubService: GitHubService){
    this._githubService.getGitHubData('greg')
      .subscribe(data => console.log(data.items));
  }
}

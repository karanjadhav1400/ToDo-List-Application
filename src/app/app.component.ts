import { Component } from '@angular/core';
import { GoogleApiService} from './google-api.service'; //Oauth

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  //Oauth
  constructor(private readonly googleApi: GoogleApiService){}
  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn();
   }
  
  logout(){
   this.googleApi.signOut()
  }
}

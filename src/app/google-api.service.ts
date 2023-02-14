import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc'
import { Subject } from 'rxjs';

//Oauth
const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '1000576645844-pvaupol55nfl34qdnclbtob3foanmth4.apps.googleusercontent.com',
  scope: 'openid profile email'
}




@Injectable({
  providedIn: 'root'
}) //Oauth
export class GoogleApiService {

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig)
    oAuthService.logoutUrl = 'http://localhost:4200/'
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() =>{
        if(!oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
        } else {
          oAuthService.loadUserProfile().then( (userProfile) => {
            console.log(JSON.stringify(userProfile))
          })
        }
      })
    })
   }

   isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken()
   }

   signOut(){
    this.oAuthService.logOut()
   
   }
}

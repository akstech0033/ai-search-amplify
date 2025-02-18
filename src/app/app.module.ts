import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
Amplify.configure(outputs);
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
    
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}
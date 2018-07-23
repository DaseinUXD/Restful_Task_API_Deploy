import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http"; // 3. import the http client module so it can make http requests
import {HttpService} from "./http.service"; // 1. register the service

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // 4. add the HttpClientModule to the imports array
  ],
  providers: [HttpService],  // 2. after registering add to the providers array
  bootstrap: [AppComponent]
})
export class AppModule {
}

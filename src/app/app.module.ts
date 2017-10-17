import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './pege-not-found/page-not-found.component';
import {HeaderComponent} from './header/header.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FindPersonComponent} from './features/find-person/find-person.component';
import {PersonInfoComponent} from './features/person-info/person-info.component';
import {FooterComponent} from './footer/footer.component';
import {fakeBackend} from './_helpers/fake-backend';
import {MockBackend} from '@angular/http/testing';
import {UserService} from './_services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomePageComponent,
    FindPersonComponent,
    PersonInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    fakeBackend,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

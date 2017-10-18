import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './pege-not-found/page-not-found.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FindPersonComponent} from './features/find-person/find-person.component';
import {PersonInfoComponent} from './features/person-info/person-info.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'find-person', component: FindPersonComponent},
  {path: 'person-info', component: PersonInfoComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

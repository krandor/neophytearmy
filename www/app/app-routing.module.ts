import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavBarComponent }      from './components/navbar.component';
import { WelcomeComponent }     from './components/welcome.component';
import { PageDetailComponent }  from './components/page-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'page/:id',  component: PageDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

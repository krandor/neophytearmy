import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }    from '@angular/router';

import { PageDetailComponent } from './page-detail.component';
import { PagesComponent } from './pages.component';
import { NavBarComponent } from './navbar.component';

import { NavigationService } from './navigation.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'pages',
        component: PagesComponent
      },
      {
        path: 'page/:id'
        component: PageDetailComponent
      }
    ])
  ],
  declarations: [
    PagesComponent,
    PageDetailComponent,
    NavBarComponent
  ],
  bootstrap: [ NavBarComponent ],
  providers: [NavigationService]
})

export class AppModule { }

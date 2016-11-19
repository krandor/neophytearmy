import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';

import { PageDetailComponent }  from './components/page-detail.component';
import { AppComponent }         from './components/app.component';
import { NavBarComponent }      from './components/navbar.component';
import { FooterComponent }      from './components/footer.component';
import { WelcomeComponent }     from './components/welcome.component';
import { AboutComponent }     from './components/about.component';
import { ContactComponent }     from './components/contact.component';

import { NavigationService }    from './services/navigation.service';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:  [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageDetailComponent,
    NavBarComponent,
    FooterComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ NavigationService ]
})

export class AppModule { }

import { Component } from '@angular/core';
import { Page } from './page';


@Component({
  selector: 'my-app',
  moduleId: module.id,
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/pages">Pages</a>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {

}

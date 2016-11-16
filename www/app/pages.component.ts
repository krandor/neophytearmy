import {Component, OnInit} from '@angular/core';
import { Page } from './page';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'my-pages',
  template: `
  <ul>
    <li *ngFor="let page of pages"
      (click)="onSelect(page)"
      [class.selected]="page === selectedPage">
      <!-- each page goes here -->
      <a href="#">{{page.name}}</a>
    </li>
  </ul>
  `
})

export class PagesComponent implements OnInit {
  pages: Page[];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.getPages();
  }

  getPages(): void {
    this.navigationService.getPages().then(pages=> this.pages = pages);
  }

  onSelect(page): void {
    this.selectedPage = page;
  }
}

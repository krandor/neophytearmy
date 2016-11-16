import { Component, OnInit } from '@angular/core';
import { Page } from './page';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'my-nav-bar',
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">NeophyteArmy</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li *ngFor="let page of pages"
                (click)="onSelect(page)"
                [class.selected]="page === selectedPage">
                <!-- each page goes here -->
                <a [routerLink]="['/page', page.id]">{{page.name}}</a>
              </li>
            </ul>
        </div>
      </div>
      <!-- /.container -->
    </nav>
    <!-- Page Content -->
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
              <router-outlet></router-outlet>
            </div>
        </div>
        <!-- /.row -->
    </div>
  `
})

export class NavBarComponent implements OnInit
{
  pages: Page[];
  selectedPage: Page;
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

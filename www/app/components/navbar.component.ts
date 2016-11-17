import { Component, OnInit }  from '@angular/core';
import { Page }               from '../objects/page';
import { NavigationService }  from '../services/navigation.service';

@Component({
  selector: 'my-nav-bar',
  moduleId: module.id,
  templateUrl: '../views/navbar.component.html'
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

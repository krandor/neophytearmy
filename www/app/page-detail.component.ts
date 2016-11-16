import {Component, Input, OnInit }  from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { NavigationService }        from './navigation.service';
import { Page }                     from './page';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-page-detail',
  moduleId: module.id,
  templateUrl: 'page-detail.component.html'
})

export class PageDetailComponent implements OnInit {
  constructor(
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params:Params) => this.navigationService.getPage(+params['id']))
      .subscribe(page => this.page = page);
  }
  goBack(): void {
    this.location.back();
  }

  @Input()
  page: Page;
}

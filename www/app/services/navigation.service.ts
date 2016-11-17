import { Injectable } from '@angular/core';

import { Page }       from '../objects/page';
import { PAGES }      from '../objects/mock-pages';

@Injectable()
export class NavigationService {
  getPages(): Promise<Page[]> {
    return Promise.resolve(PAGES);
  }
  getPage(id: number): Promise<Page> {
    return this.getPages().then(pages => pages.find(page => page.id===id));
  }
}

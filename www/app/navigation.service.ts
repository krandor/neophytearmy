import { Injectable } from '@angular/core';

import { Page }       from './page';
import { PAGES }      from './mock-pages';

@Injectable()
export class NavigationService {
  getPages(): Promise<Page[]> {
    return Promise.resolve(PAGES);
  }
  getPage(id: number): Promise<Page> {
    return this.getPages().then(pages => pages.find(page => page.id===id));
  }
}

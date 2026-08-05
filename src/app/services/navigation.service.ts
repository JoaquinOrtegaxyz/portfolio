import { Injectable, signal } from '@angular/core';

export type NavTab = 'hero' | 'about' | 'services' | 'portfolio' | 'work' | 'contact';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  readonly activeTab = signal<NavTab>('hero');

  setTab(tab: NavTab) {
    this.activeTab.set(tab);
  }
}

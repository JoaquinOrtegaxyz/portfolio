import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { NavigationService, NavTab } from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html'
})
export class Navbar {
  mobileMenu: boolean = false;
  ts = inject(TranslationService);
  nav = inject(NavigationService);

  selectTab(tab: NavTab) {
    this.mobileMenu = false;
    this.nav.setTab(tab);
  }
}
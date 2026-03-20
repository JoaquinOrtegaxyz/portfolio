import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html'
})
export class Navbar {
  mobileMenu: boolean = false;
  ts = inject(TranslationService);
  triggerNavItem(id: string) {
    this.mobileMenu = false;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
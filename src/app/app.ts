import { Component, inject } from '@angular/core';
import { NavigationService } from './services/navigation.service';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Portfolio } from './components/portfolio/portfolio';
import { Footer } from './components/footer/footer';
import { Contact } from './components/contact/contact';
import { Work } from './components/work/work';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Services, Portfolio, Footer, Contact, Work],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nav = inject(NavigationService);
}

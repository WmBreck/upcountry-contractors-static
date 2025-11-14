import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero.component';
import { ServicesComponent } from '../components/services.component';
import { ContactComponent } from '../components/contact.component';
import { FooterComponent } from '../components/footer.component';
import { StickyCTAComponent } from '../components/sticky-cta.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    StickyCTAComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-services></app-services>
    <app-contact></app-contact>
    <app-footer></app-footer>
    <app-sticky-cta></app-sticky-cta>
  `
})
export class HomePageComponent {}

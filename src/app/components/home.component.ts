import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { ServicesComponent } from './services.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, ServicesComponent, ContactComponent, FooterComponent],
  template: `
    <div class="app">
      <app-hero></app-hero>
      <app-services></app-services>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`.app{min-height:100vh;overflow-x:hidden}`]
})
export class HomeComponent {}
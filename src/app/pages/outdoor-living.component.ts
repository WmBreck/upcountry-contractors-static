import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-outdoor-living-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent],
  template: `
  <section class="subpage">
    <div class="container">
      <img src="assets/Upcountry_Logo.png" alt="Upcountry Contractors LLC Logo" class="page-logo" />
      <h1 class="page-title">Outdoor Living</h1>
      <div class="back-bar">
        <a routerLink="/" class="btn btn-outline">← Back to Home</a>
      </div>
      <div class="page-content">
        <h2>Extend Your Home Outdoors</h2>
        <p>
          Your backyard should be more than just grass — it can be an extension of your lifestyle. 
          At <strong>Upcountry Contractors</strong>, we design and build outdoor living spaces that 
          combine comfort, beauty, and function. From cozy patios to expansive decks, we’ll help you 
          create the perfect setting for family gatherings, cookouts, or simply relaxing after a long day.
        </p>

        <h2>Outdoor Living Features We Build</h2>
        <ul>
          <li><strong>Decks & Patios:</strong> Custom designs in wood, composite, or stone.</li>
          <li><strong>Outdoor Kitchens:</strong> Grills, counters, and storage for entertaining.</li>
          <li><strong>Covered Porches & Pergolas:</strong> Shade and shelter for year-round use.</li>
          <li><strong>Fire Pits & Fireplaces:</strong> Extend your evenings outdoors.</li>
          <li><strong>Hardscaping:</strong> Walkways, retaining walls, and seating areas.</li>
        </ul>

        <h2>Why Upgrade Your Outdoor Living?</h2>
        <ul>
          <li><strong>Increase Home Value:</strong> Outdoor spaces are top features for buyers.</li>
          <li><strong>Enjoy More Space:</strong> Expand your living area without adding walls.</li>
          <li><strong>Entertain with Ease:</strong> Host friends and family in style.</li>
        </ul>

        <h2>Built to Last</h2>
        <p>
          We use high-quality materials and proven construction methods so your outdoor space 
          withstands the elements and brings you joy for years to come.
        </p>
      </div>

      <div class="subpage-ctas">
        <a class="btn btn-outline" routerLink="/">← Back to Home</a>
        <a class="btn btn-primary" routerLink="/" fragment="contact">Get a Free Estimate</a>
        <a class="btn btn-outline" href="tel:8646609913">Call 864-660-9913</a>
      </div>
    </div>
  </section>
  <app-footer></app-footer>
  `,
  styles: [`
  .subpage{padding:3rem 1rem}.container{max-width:1100px;margin:0 auto}
  .page-logo{width:160px;height:auto;margin:0 auto 1rem;display:block}
  .page-title{font-size:2.25rem;font-weight:800;text-align:center;margin:.5rem 0 1.5rem}
  .page-content :where(p,h2,ul,ol){margin-bottom:1rem}
  .page-content h2{font-size:1.375rem;margin-top:1rem}
  .subpage-ctas{display:flex;gap:1rem;justify-content:center;margin-top:2rem;flex-wrap:wrap}
  .btn{padding:.75rem 1.25rem;border-radius:9999px;text-decoration:none;display:inline-block}
  .btn-primary{background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff}
  .btn-outline{border:1px solid #1d4ed8;color:#1d4ed8}
  `]
})
export class OutdoorLivingPageComponent {}


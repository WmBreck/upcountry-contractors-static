import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-bathroom-renovation-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent],
  template: `
  <section class="subpage">
    <div class="container">
      <h1 class="page-title">Considering a Bathroom Renovation</h1>
      <div class="back-bar">
        <a routerLink="/" class="btn btn-outline">← Back to Home</a>
      </div>
<div class="page-content">
        <h2>Considering a Bathroom Renovation?</h2>
        <p>
          Your bathroom should be more than just a functional space – it should be a retreat. 
          Whether you dream of a spa-like sanctuary or need a practical update to improve accessibility, 
          Upcountry Contractors delivers beautiful, lasting results.
        </p>

        <h2>Why Renovate Your Bathroom?</h2>
        <ul>
          <li><strong>Increase Home Value</strong>: Bathrooms are one of the most important spaces buyers consider.</li>
          <li><strong>Improve Comfort & Efficiency</strong>: Modern fixtures reduce water use and utility bills.</li>
          <li><strong>Personal Style</strong>: Create a space that matches your taste, from rustic charm to sleek modern design.</li>
        </ul>

        <h2>Our Bathroom Renovation Services</h2>
        <ul>
          <li>Custom tile showers and tubs</li>
          <li>Cabinetry and vanity installation</li>
          <li>Flooring and lighting upgrades</li>
          <li>Plumbing and fixture replacement</li>
          <li>Accessible bathroom solutions</li>
        </ul>

        <h2>Why Choose Us</h2>
        <p>
          At <strong>Upcountry Contractors</strong>, we bring craftsmanship and attention to detail to every project. 
          Our team ensures that your bathroom not only looks amazing but also functions flawlessly for years to come.
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
export class BathroomRenovationPageComponent {}

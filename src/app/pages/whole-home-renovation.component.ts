import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-whole-home-renovation-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent],
  template: `
  <section class="subpage">
    <div class="container">
      <img src="assets/Upcountry_Logo.png" alt="Upcountry Contractors LLC Logo" class="page-logo" />
      <h1 class="page-title">Whole Home Renovation</h1>
      <div class="back-bar">
        <a routerLink="/" class="btn btn-outline">← Back to Home</a>
      </div>
      <div class="page-content">
        <h2>Transform Your Entire Home</h2>
        <p>
          A whole-home renovation is more than just an update — it’s a chance to reimagine your space and bring it in line 
          with the way you live today. At <strong>Upcountry Contractors</strong>, we manage every detail of large-scale 
          remodels, ensuring your home becomes both more functional and more beautiful.
        </p>

        <h2>Why Choose a Whole Home Renovation?</h2>
        <ul>
          <li><strong>Modernize Your Space:</strong> Outdated layouts and finishes can be replaced with fresh, efficient designs.</li>
          <li><strong>Improve Flow & Functionality:</strong> Open up rooms, add storage, and create spaces that suit your lifestyle.</li>
          <li><strong>Increase Property Value:</strong> A thoughtfully renovated home can significantly boost resale value.</li>
        </ul>

        <h2>Our Whole Home Renovation Services</h2>
        <ul>
          <li>Kitchen and bathroom overhauls</li>
          <li>Flooring, lighting, and trim updates</li>
          <li>Wall reconfigurations and open floor plans</li>
          <li>Energy-efficient windows and doors</li>
          <li>Complete interior and exterior refresh</li>
        </ul>

        <h2>Our Approach</h2>
        <p>
          From initial design to final walkthrough, we partner closely with you to bring your vision to life. 
          Our team coordinates all aspects — construction, finishes, and details — so you can enjoy a stress-free renovation.
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
export class WholeHomeRenovationPageComponent {}

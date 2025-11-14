import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-home-additions-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent],
  template: `
  <section class="subpage">
    <div class="container">
      <img src="assets/Upcountry_Logo.png" alt="Upcountry Contractors LLC Logo" class="page-logo" />
      <h1 class="page-title">Home Additions</h1>
      <div class="back-bar">
        <a routerLink="/" class="btn btn-outline">← Back to Home</a>
      </div>
      <div class="page-content">
        <h2>Expand Your Living Space</h2>
        <p>
          A well-planned home addition can transform how you live in your home. Whether you’re 
          looking to add a spacious master suite, expand your kitchen, or create a sunroom that 
          brings in natural light, <strong>Upcountry Contractors</strong> will design and build an 
          addition that feels seamless and adds long-term value.
        </p>

        <h2>Types of Additions We Build</h2>
        <ul>
          <li><strong>Master Suites & Bedrooms:</strong> Extra space for comfort and privacy.</li>
          <li><strong>Kitchen Expansions:</strong> Open layouts, larger islands, and more storage.</li>
          <li><strong>Living Rooms & Sunrooms:</strong> Bright, inviting spaces for family and guests.</li>
          <li><strong>Second-Story Additions:</strong> Build upward to maximize your lot.</li>
          <li><strong>Garage Additions:</strong> Protect vehicles, add workshops, or create storage.</li>
        </ul>

        <h2>Why Consider a Home Addition?</h2>
        <ul>
          <li><strong>Boost Home Value:</strong> More square footage = higher resale value.</li>
          <li><strong>Stay in Place:</strong> Get the space you need without moving.</li>
          <li><strong>Personalization:</strong> Design your space around your lifestyle.</li>
        </ul>

        <h2>Our Approach</h2>
        <p>
          We handle everything from design and permitting to construction and finishing. Our 
          additions blend with your existing structure so they look like they’ve always been part 
          of your home — not an afterthought.
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
export class HomeAdditionsPageComponent {}

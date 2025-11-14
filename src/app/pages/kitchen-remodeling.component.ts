import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-kitchen-remodeling-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent],
  template: `
  <section class="subpage">
    <div class="container">
      <img src="assets/Upcountry_Logo.png" alt="Upcountry Contractors LLC Logo" class="page-logo" />
      <h1 class="page-title">Kitchen Remodeling</h1>
        <div class="back-bar">
          <a routerLink="/" class="btn btn-outline">← Back to Home</a>
        </div>
      <div class="page-content">
        <h2>Transform Your Kitchen</h2>
        <p>
          The kitchen is the heart of the home. Whether you’re after a warm, traditional space or a sleek,
          modern layout, we design and build kitchens that look beautiful, function flawlessly, and stand up
          to daily life.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li>Custom cabinetry, islands, and storage solutions</li>
          <li>Countertops in quartz, granite, butcher block, and more</li>
          <li>Tile backsplashes and accent walls</li>
          <li>Flooring (hardwood, LVP, tile) and trim</li>
          <li>Lighting, plumbing fixtures, and appliance integration</li>
          <li>Layout changes, wall removals, and permitting</li>
        </ul>

        <h2>Our Process</h2>
        <ol>
          <li><strong>Consultation & Estimate:</strong> We discuss goals, budget, and timeline.</li>
          <li><strong>Design & Selections:</strong> We help you choose materials and finalize the plan.</li>
          <li><strong>Build:</strong> Careful demo, precise carpentry, clean jobsite, clear communication.</li>
          <li><strong>Walkthrough:</strong> We review finishes and details to make sure you love it.</li>
        </ol>

        <h2>Materials & Finishes</h2>
        <p>
          We work with trusted suppliers and proven finishes so your kitchen looks great for years. From
          cabinet hardware to under-cabinet lighting, every detail is considered for function and style.
        </p>

        <h2>Why Upcountry Contractors</h2>
        <ul>
          <li>Local, reliable, and easy to reach</li>
          <li>Quality craftsmanship and attention to detail</li>
          <li>Clear schedules and tidy job sites</li>
          <li>A results-first approach—done right the first time</li>
        </ul>
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
export class KitchenRemodelingPageComponent {}


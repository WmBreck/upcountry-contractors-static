import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Expert Services</h2>
          <p class="section-subtitle">
            From kitchen remodels to complete home renovations, we bring your vision to life
          </p>
        </div>
        
        <div class="services-grid">
          <div class="service-card glass-panel" *ngFor="let service of services; let i = index"
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="service-image">
              <img [src]="service.image" [alt]="service.title" class="service-img">
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-features">
              <span class="feature" *ngFor="let feature of service.features">{{ feature }}</span>
            </div>

            <!-- CTA -->
            <div class="service-cta">
              <a class="btn btn-light" [routerLink]="service.link">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Section */
    .services-section {
      padding: 6rem 0;
      background: var(--surface);
    }
    .container { max-width:1200px; margin:0 auto; padding:0 2rem; }

    /* Header */
    .section-header { text-align:center; margin-bottom: 3rem; }
    .section-title { 
      font-size:3rem; font-weight:800; 
      color: #166534; /* deep green from logo */ 
      margin-bottom:.75rem; 
    }
    .section-subtitle { 
      color: #8b5e3c; /* brown from logo */
      font-size:1.1rem; 
    }

    /* Grid */
    .services-grid {
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
      gap: 2rem;
    }

    /* Cards */
    .service-card {
      padding: 2rem;
      text-align:center;
      transition: transform .2s ease, box-shadow .2s ease;
      border-radius: 16px;
      background: #fff;
    }
    .service-card:hover { 
      transform: translateY(-4px); 
      box-shadow:0 14px 35px rgba(0,0,0,.12); 
    }

    .service-image { border-radius:12px; overflow:hidden; margin-bottom:1rem; }
    .service-img { width:100%; height:200px; object-fit:cover; }

    .service-title { 
      font-size:1.375rem; font-weight:800; 
      color: #166534; /* green heading */
      margin:.5rem 0; 
    }
    .service-description { 
      color: #4a3728; /* softer brown body text */
      margin-bottom: 1rem; 
    }

    /* Features */
    .service-features { display:flex; flex-wrap:wrap; gap:.5rem; justify-content:center; }
    .feature {
      background:#f3f4f6; border:1px solid #e5e7eb; 
      color:#4a3728; /* brown text for features */
      padding:.35rem .7rem; border-radius:9999px; 
      font-size:.85rem; font-weight:600;
    }

    /* CTA */
    .service-cta { margin-top: 1.5rem; }
    .btn.btn-light {
      display: inline-block;
      padding: 0.5rem 1.2rem;
      border-radius: 9999px;
      background: #166534; /* green button */
      color: #fff;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .btn.btn-light:hover {
      background: #14532d; /* darker green hover */
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

    /* Responsive */
    @media (max-width:768px) {
      .services-section { padding:4rem 0; }
      .section-title { font-size:2.25rem; }
      .services-grid { grid-template-columns: 1fr; gap: 1.5rem; }
      .service-card { padding: 2rem; }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      image: 'assets/Kitchen1.jpg',
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into the heart of your home with custom cabinets, countertops, and modern appliances.',
      features: ['Custom Cabinets', 'Granite Counters', 'Modern Appliances', 'Open Concepts'],
      link: '/kitchen-remodeling'
    },
    {
      image: 'assets/bathroom1.jpg',
      title: 'Bathroom Renovation',
      description: 'Create your personal spa with luxurious fixtures, tile work, and efficient layouts that maximize space.',
      features: ['Luxury Fixtures', 'Custom Tile', 'Walk-in Showers', 'Vanity Design'],
      link: '/bathroom-renovation'
    },
    {
      image: 'assets/addition1.jpg',
      title: 'Home Additions',
      description: 'Expand your living space with seamless additions that blend perfectly with your existing home.',
      features: ['Room Additions', 'Second Stories', 'Sunrooms', 'Garages'],
      link: '/home-additions'
    },
    {
      image: 'assets/outdoor1.jpg',
      title: 'Outdoor Living',
      description: 'Extend your home outdoors with decks, patios, and outdoor kitchens perfect for entertaining.',
      features: ['Custom Decks', 'Outdoor Kitchens', 'Fire Features', 'Landscaping'],
      link: '/outdoor-living'
    },
    {
      image: 'assets/remodel1.jpg',
      title: 'Whole Home Renovation',
      description: 'Complete home transformations that modernize every aspect of your living space.',
      features: ['Full Renovation', 'Structural Work', 'Modern Updates', 'Energy Efficiency'],
      link: '/whole-home-renovation'
    },
    {
      image: 'assets/repair1.jpg',
      title: 'Home Repairs',
      description: 'Professional repair services to fix and maintain your home, from minor fixes to major repairs.',
      features: ['Plumbing Repairs', 'Electrical Work', 'Drywall Fixes', 'Emergency Service'],
      link: '/home-repairs'
    }
  ];
}
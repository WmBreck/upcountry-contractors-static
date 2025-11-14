import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="hero-background"></div>
      <div class="hero-content">
        <div class="company-logo">
          <img 
            src="assets/Upcountry_Logo.png" 
            alt="Upcountry Contractors LLC Logo" 
            class="hero-logo" />
        </div>
        <div class="glass-panel hero-panel">
          <div class="business-name">Upcountry Contractors LLC</div>
          <h1 class="hero-title">Transform Your Upcountry Home Today</h1>
          <p class="hero-subtitle">
            Expert construction and remodeling services with local expertise 
            in Greenville, Spartanburg, and surrounding upcountry communities
          </p>
          <div class="cta-buttons">
            <a href="tel:+18646609913" class="cta-button primary">
              <span class="cta-icon">📞</span>
              Call Now
            </a>
            <a href="mailto:upcountrycontractors@gmail.com" class="cta-button secondary">
              <span class="cta-icon">✉️</span>
              Email Us
            </a>
            <a href="sms:+18646609913" class="cta-button secondary">
              <span class="cta-icon">💬</span>
              Text Us
            </a>
            <button class="cta-button tertiary" (click)="scrollToContact()">
              <span class="cta-icon">📋</span>
              Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      overflow: hidden;
    }

   .hero-background {
  position:absolute; inset:0;
  background-image: url('/assets/newconstruction1.jpg');
  background-size: cover;
  background-position: center;
  background-color: rgba(15,23,42,0.65); /* uses deep-navy overlay */
  background-blend-mode: overlay;
}

    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 800px;
      margin-bottom: 3rem;
    }

    .company-logo {
      margin-bottom: 2rem;
      animation: fadeInDown 1s ease-out;
    }

    .hero-logo {
      max-width: 180px;
      height: auto;
      filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
      transition: transform 0.3s ease;
    }

    .hero-logo:hover { transform: scale(1.05); }

    .glass-panel {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }

    .hero-panel {
      padding: 3rem;
      animation: fadeInUp 1s ease-out;
    }

    .business-name {
      font-size: 1.2rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.9);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1rem;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      color: white;
      margin-bottom: 1.5rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2.5rem;
      line-height: 1.6;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.1rem;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .cta-button.primary {
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      color: white;
    }

    .cta-button.secondary {
      background: linear-gradient(135deg, #4ecdc4, #44a08d);
      color: white;
    }

    .cta-button.tertiary {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .cta-icon { font-size: 1.2rem; }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-30px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
      .hero-title { font-size: 2.5rem; }
      .hero-subtitle { font-size: 1.1rem; }
      .hero-panel { padding: 2rem; }
      .cta-buttons { flex-direction: column; align-items: center; }
      .cta-button { width: 100%; max-width: 250px; justify-content: center; }
    }
  `]
})
export class HeroComponent {
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
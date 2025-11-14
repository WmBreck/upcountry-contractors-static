import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Brand / About -->
          <div class="footer-section">
            <div class="footer-logo">
              <img src="assets/Upcountry_Logo.png"
                   alt="Upcountry Contractors LLC Logo"
                   class="footer-logo-image" />
            </div>
            <h3 class="footer-title">Upcountry Contractors LLC</h3>
            <p class="footer-description">
              Transforming homes across upcountry South Carolina with quality craftsmanship
              and exceptional service.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">📘</a>
              <a href="#" class="social-link" aria-label="Instagram">📷</a>
              <a href="#" class="social-link" aria-label="LinkedIn">💼</a>
              <a href="#" class="social-link" aria-label="Google">🔍</a>
            </div>
          </div>

          <!-- Services -->
          <div class="footer-section">
            <h4 class="section-title">Services</h4>
            <ul class="footer-links services-links">
              <li><a routerLink="/kitchen-remodeling">Kitchen Remodeling</a></li>
              <li><a routerLink="/bathroom-renovation">Bathroom Renovation</a></li>
              <li><a routerLink="/home-additions">Home Additions</a></li>
              <li><a routerLink="/outdoor-living">Outdoor Living</a></li>
              <li><a routerLink="/whole-home-renovation">Whole Home Renovation</a></li>
            </ul>
          </div>

          <!-- Areas -->
          <div class="footer-section">
            <h4 class="section-title">Service Areas</h4>
            <ul class="footer-links">
              <li>Greenville, SC</li>
              <li>Spartanburg, SC</li>
              <li>Greer, SC</li>
              <li>Simpsonville, SC</li>
              <li>Mauldin, SC</li>
              <li>Taylors, SC</li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-section">
            <h4 class="section-title">Contact Info</h4>
            <div class="contact-info">
              <a href="tel:+18646609913" class="contact-item">
                <span class="contact-icon">📞</span>
                (864) 660-9913
              </a>
              <a href="mailto:upcountrycontractors&#64;gmail.com" class="contact-item">
                <span class="contact-icon">✉️</span>
                upcountrycontractors&#64;gmail.com
              </a>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                Serving Upcountry South Carolina
              </div>
              <div class="contact-item">
                <span class="contact-icon">🕒</span>
                Mon–Fri: 8AM–5PM, Sat: By appointment only
              </div>
            </div>

            <div class="owner-info">
              <img src="assets/garrett_thumbnail.jpg" alt="Garrett Lovin" class="owner-photo" />
              <div class="owner-details">
                <span class="owner-title">Owner</span>
                <span class="owner-name">Garrett Lovin</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="copyright">
              © 2025 Upcountry Contractors. All rights reserved.
            </p>
            <div class="footer-badges">
              <span class="badge">Licensed & Insured</span>
              <span class="badge">BBB Accredited</span>
              <span class="badge">Locally Owned</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Container + Grid */
    .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr; /* <-- 4 columns on desktop */
      gap: 3rem;
      margin-bottom: 2rem;
      align-items: start;
    }

    /* Concrete background + base palette */
    .footer{
      background: radial-gradient(circle at 20% 20%, #f5f5f5, #e5e5e5 40%, #d9d9d9 100%);
      background-blend-mode: multiply;
      padding: 3rem 0 1.25rem;
      border-top: 1px solid rgba(0,0,0,0.1);
      box-shadow: inset 0 2px 6px rgba(0,0,0,0.12);
      color: #14532d; /* green is default text color */
    }

    /* Headings / accents green */
    .footer-title,
    .section-title,
    .owner-name,
    .badge {
      color: #14532d;
    }

    /* Services links brown by default, green on hover */
    .footer-links.services-links a {
      color: #7c3f00;
      text-decoration: none;
      transition: color .25s ease;
    }
    .footer-links.services-links a:hover {
      color: #14532d;
    }

    /* Non-link text that should remain brown */
    .footer-description,
    .contact-item,
    .owner-title,
    .copyright {
      color: #7c3f00;
    }

    /* Lists */
    .footer-links { list-style: none; padding: 0; margin: 0; }
    .footer-links li { margin-bottom: .5rem; }

    /* Logo */
    .footer-logo { margin-bottom: 1rem; }
    .footer-logo-image { max-width: 120px; height: auto; }

    /* Socials */
    .social-links { display: flex; gap: 1rem; }
    .social-link {
      display: inline-flex; align-items: center; justify-content: center;
      width: 40px; height: 40px; border-radius: 50%;
      background: rgba(20, 83, 45, 0.08);
      border: 1px solid rgba(20, 83, 45, 0.2);
      font-size: 1.1rem; text-decoration: none; transition: transform .2s ease;
    }
    .social-link:hover { transform: translateY(-2px); }

    /* Contact */
    .contact-info { display: flex; flex-direction: column; gap: .6rem; }
    .contact-item {
      display: flex; align-items: center; gap: .5rem;
      text-decoration: none; transition: color .2s ease;
    }
    .contact-item:hover { color: #14532d; }
    .contact-icon { width: 20px; }

    /* Owner */
    .owner-info {
      display: flex; align-items: center; gap: .8rem; margin-top: 1.5rem; padding-top: 1rem;
      border-top: 1px solid rgba(0,0,0,0.08);
    }
    .owner-photo {
      width: 60px; height: 60px; border-radius: 8px; object-fit: cover;
      border: 2px solid #7c3f00; background: #fff;
    }
    .owner-details { display: flex; flex-direction: column; gap: .2rem; }
    .owner-title { font-size: .85rem; }

    /* Bottom row */
    .footer-bottom { border-top: 1px solid rgba(0,0,0,0.08); padding-top: 1.25rem; }
    .footer-bottom-content {
      display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;
    }
    .badge {
      background: rgba(124, 63, 0, 0.12);
      border: 1px solid rgba(124, 63, 0, 0.3);
      padding: .3rem .8rem;
      border-radius: 15px;
      font-size: .8rem; font-weight: 600;
    }

    /* Responsiveness */
    @media (max-width: 1024px) and (min-width: 769px) {
      .footer-content { grid-template-columns: 1fr 1fr; gap: 2rem; }
    }
    @media (max-width: 768px) {
      .container { padding: 0 1.25rem; }
      .footer-content { grid-template-columns: 1fr; gap: 2rem; text-align: center; }
      .social-links { justify-content: center; }
      .footer-bottom-content { flex-direction: column; text-align: center; gap: 1rem; }
    }
  `]
})
export class FooterComponent {}
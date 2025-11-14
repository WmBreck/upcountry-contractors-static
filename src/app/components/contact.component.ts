import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get Your Free Estimate Today</h2>
          <p class="section-subtitle">
            Ready to transform your home? Contact us for a free consultation and estimate
          </p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info glass-panel">
            <h3 class="contact-title">Get In Touch</h3>
            
            <div class="contact-methods">
              <!-- Call -->
              <a href="tel:+18646609913" class="contact-method" aria-label="Call Upcountry Contractors at 864-660-9913">
                <div class="method-icon">📞</div>
                <div class="method-info">
                  <div class="method-label">Call Us Now</div>
                  <div class="method-value">(864) 660-9913</div>
                </div>
              </a>
              
              <!-- Text -->
              <a href="sms:+18646609913" class="contact-method" aria-label="Text Upcountry Contractors at 864-660-9913">
                <div class="method-icon">💬</div>
                <div class="method-info">
                  <div class="method-label">Text Us</div>
                  <div class="method-value">Text: (864) 660-9913</div>
                </div>
              </a>
              
              <!-- Email -->
              <a href="mailto:upcountrycontractors@gmail.com" class="contact-method" aria-label="Email Upcountry Contractors">
                <div class="method-icon">✉️</div>
                <div class="method-info">
                  <div class="method-label">Email Us</div>
                  <div class="method-value">upcountrycontractors&#64;gmail.com</div>
                </div>
              </a>
            </div>

            <div class="service-area">
              <h4 class="area-title">Service Areas</h4>
              <div class="areas">
                <span class="area">Greenville</span>
                <span class="area">Spartanburg</span>
                <span class="area">Greer</span>
                <span class="area">Simpsonville</span>
                <span class="area">Mauldin</span>
                <span class="area">Taylors</span>
                <span class="area">Boiling Springs</span>
                <span class="area">Duncan</span>
              </div>
            </div>

            <div class="emergency-banner glass-panel">
              <div class="banner-icon">🎯</div>
              <div class="banner-text">
                <strong>Limited Time Offer!</strong><br>
                Free consultation for upcountry residents this month
              </div>
            </div>
          </div>
          
          <form class="contact-form glass-panel" (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <h3 class="form-title">Request Your Free Estimate</h3>
            
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                [(ngModel)]="formData.name" 
                required 
                class="form-input">
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                [(ngModel)]="formData.phone" 
                required 
                class="form-input">
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                [(ngModel)]="formData.email" 
                class="form-input">
            </div>
            
            <div class="form-group">
              <label for="service">Service Needed</label>
              <select id="service" name="service" [(ngModel)]="formData.service" class="form-input">
                <option value="">Select a service...</option>
                <option value="kitchen">Kitchen Remodeling</option>
                <option value="bathroom">Bathroom Renovation</option>
                <option value="addition">Home Addition</option>
                <option value="outdoor">Outdoor Living</option>
                <option value="whole-home">Whole Home Renovation</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Project Details</label>
              <textarea 
                id="message" 
                name="message" 
                [(ngModel)]="formData.message" 
                rows="4" 
                class="form-input"
                placeholder="Tell us about your project..."></textarea>
            </div>
            
            <button type="submit" class="submit-button" [disabled]="!contactForm.form.valid">
              <span class="button-icon">🚀</span>
              Get My Free Estimate
            </button>
            
            <p class="form-note">
              * Required fields. We'll contact you within 24 hours to schedule your free consultation.
            </p>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
.contact-section{
  padding:6rem 0;
  background:#ffffff;
}
.container{ max-width:1200px; margin:0 auto; padding:0 2rem; }
.section-header{ text-align:center; margin-bottom:3rem; }
.section-title{ font-size:3rem; font-weight:800; color:var(--text-strong); }
.section-subtitle{ color:var(--muted); }

.contact-content{
  display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:start;
}

.contact-info, .contact-form{ padding:2rem; }
.contact-title{ font-size:1.5rem; font-weight:800; color:var(--text-strong); margin-bottom:1rem; }
.contact-methods{ margin-bottom:1.5rem; }

.contact-method{
  display:flex; align-items:center; gap:1rem; padding:1rem; margin-bottom:1rem;
  background:#fff; border:1px solid var(--line); border-radius:12px;
  text-decoration:none; transition:.2s ease; color:var(--text);
}
.contact-method:hover{ box-shadow:0 10px 24px rgba(0,0,0,.08); transform: translateX(4px); }

.method-icon{ font-size:1.4rem; width:36px; text-align:center; }
.method-label{ font-size:.9rem; color:var(--muted); margin-bottom:.25rem; }
.method-value{ font-size:1.05rem; font-weight:700; color:var(--text-strong); }

.service-area{ margin-top:1rem; }
.area-title{ font-weight:700; color:var(--text-strong); margin-bottom:.5rem; }
.areas{ display:flex; flex-wrap:wrap; gap:.5rem; }
.area{
  background:#fff; border:1px solid var(--line); color:var(--text);
  padding:.35rem .6rem; border-radius:9999px; font-size:.85rem; font-weight:600;
}

.emergency-banner{
  margin-top:1rem; padding:1rem; display:flex; align-items:center; gap:1rem;
  background:#FFF8E6; border:1px solid #FDE68A; border-radius:12px; color:#92400E;
}
.banner-icon{ font-size:1.5rem; }

.form-title{ font-size:1.5rem; font-weight:800; color:var(--text-strong); margin-bottom:1rem; }
.form-group{ margin-bottom:1rem; }
.form-group label{ display:block; font-weight:600; color:var(--text-strong); margin-bottom:.4rem; }
.form-input{
  width:100%; padding:.75rem 1rem; border:1px solid var(--line); border-radius:10px;
  background:#fff; color:var(--text); font-size:1rem; transition:.2s ease;
}
.form-input:focus{ outline:none; border-color:#cbd5e1; box-shadow:0 0 0 3px rgba(59,130,246,.15); }

.submit-button{
  width:100%; padding:1rem 2rem; border:none; border-radius:9999px; cursor:pointer;
  background:var(--cta); color:#fff; font-weight:800; letter-spacing:.2px; transition:.2s ease;
  box-shadow:0 8px 22px rgba(249,115,22,.25);
}
.submit-button:hover{ background:var(--cta-hover); transform:translateY(-2px); }
.form-note{ color:var(--muted); font-size:.9rem; text-align:center; margin-top:.5rem; }

@media (max-width:768px){
  .contact-content{ grid-template-columns:1fr; }
  .section-title{ font-size:2.25rem; }
}
.submit-button:hover{ background:var(--cta-hover); transform:translateY(-2px); }
.form-note{ color:var(--muted); font-size:.9rem; text-align:center; margin-top:.5rem; }

@media (max-width:768px){
  .contact-content{ grid-template-columns:1fr; }
  .section-title{ font-size:2.25rem; }
}

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @media (max-width: 768px) {
      .contact-section { padding: 4rem 0; }
      .section-title { font-size: 2.5rem; }
      .contact-content { grid-template-columns: 1fr; gap: 2rem; }
      .contact-info, .contact-form { padding: 2rem; }
      .areas { justify-content: center; }
      .emergency-banner { flex-direction: column; text-align: center; gap: 0.5rem; }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your inquiry! We\'ll contact you within 24 hours to schedule your free consultation.');
    this.formData = { name: '', phone: '', email: '', service: '', message: '' };
  }
}
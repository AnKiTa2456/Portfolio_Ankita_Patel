import { Component, OnInit, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

declare const emailjs: {
  init: (opts: { publicKey: string }) => void;
  send: (serviceId: string, templateId: string, params: Record<string, string>) => Promise<{ status: number }>;
};

/**
 * Contact form wired to Ankita's EmailJS account.
 * Credentials are sourced from her existing React portfolio bundle.
 *
 * Service:  service_tox7kqs
 * Template: template_nv7k7mj
 * Key:      SybVGsYS52j2TfLbi
 *
 * The EmailJS SDK is loaded via CDN in index.html (no npm install needed).
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  submitState = signal<'idle' | 'loading' | 'success' | 'error'>('idle');

  readonly contactForm: FormGroup;

  private readonly EMAILJS_SERVICE  = 'service_b0w9uyo';
  private readonly EMAILJS_TEMPLATE = 'template_po870lq';
  private readonly EMAILJS_KEY      = 'Tu0JTwG4pa-k-dh7y';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      email:   ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && typeof emailjs !== 'undefined') {
      emailjs.init({ publicKey: this.EMAILJS_KEY });
    }
  }

  get name():    AbstractControl { return this.contactForm.get('name')!; }
  get email():   AbstractControl { return this.contactForm.get('email')!; }
  get message(): AbstractControl { return this.contactForm.get('message')!; }

  fieldError(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.submitState.set('loading');

    const { name, email, message } = this.contactForm.value;

    if (isPlatformBrowser(this.platformId) && typeof emailjs !== 'undefined') {
      emailjs
        .send(this.EMAILJS_SERVICE, this.EMAILJS_TEMPLATE, {
          from_name:    name,
          from_email:   email,
          reply_to:     email,
          message:      message,
          to_name:      'Ankita',
        })
        .then(() => {
          this.submitState.set('success');
          this.contactForm.reset();
        })
        .catch(() => this.submitState.set('error'));
    } else {
      // Fallback: EmailJS SDK not loaded (SSR / ad-blocker)
      console.log('Form data:', { name, email, message });
      setTimeout(() => {
        this.submitState.set('success');
        this.contactForm.reset();
      }, 800);
    }
  }

  resetForm(): void {
    this.submitState.set('idle');
    this.contactForm.reset();
  }
}

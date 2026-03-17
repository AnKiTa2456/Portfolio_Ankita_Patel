import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * ScrollRevealDirective adds entrance animations to any host element
 * by observing when it enters the viewport (IntersectionObserver).
 *
 * Usage:
 *   <div appScrollReveal revealDirection="up" revealDelay="100ms">...</div>
 *
 * The directive adds CSS classes handled by styles.scss:
 *   .reveal, .reveal-up|down|left|right  →  initial hidden state
 *   .visible                             →  animated-in state
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDirection: 'up' | 'down' | 'left' | 'right' = 'up';
  @Input() revealDelay = '0ms';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    el.classList.add('reveal', `reveal-${this.revealDirection}`);
    el.style.transitionDelay = this.revealDelay;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          // Unobserve after first reveal so it doesn't re-animate on scroll back
          this.observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

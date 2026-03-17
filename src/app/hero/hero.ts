import { Component, OnInit, OnDestroy, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  /** Local photo placed in /public/ankita-profile.jpeg */
  readonly profileImageUrl = 'ankita-profile.jpeg';

  readonly roles = [
    'Front-end Developer',
    'Software Developer',
    'UI/UX Designer',
    'React & Angular Dev',
  ];

  displayRole = signal('');
  showCursor = signal(true);

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer: ReturnType<typeof setTimeout> | null = null;
  private cursorTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.tick();
    // Blinking cursor
    this.cursorTimer = setInterval(() => {
      this.showCursor.update(v => !v);
    }, 530);
  }

  ngOnDestroy(): void {
    if (this.typeTimer)  clearTimeout(this.typeTimer);
    if (this.cursorTimer) clearInterval(this.cursorTimer);
  }

  private tick(): void {
    const current = this.roles[this.roleIndex];
    const TYPING_SPEED   = 85;
    const DELETING_SPEED = 45;
    const PAUSE_AFTER    = 1800;
    const PAUSE_BEFORE   = 300;

    if (!this.isDeleting) {
      this.charIndex++;
      this.displayRole.set(current.substring(0, this.charIndex));

      if (this.charIndex === current.length) {
        // Pause at end of word, then start deleting
        this.isDeleting = true;
        this.typeTimer = setTimeout(() => this.tick(), PAUSE_AFTER);
        return;
      }
      this.typeTimer = setTimeout(() => this.tick(), TYPING_SPEED);
    } else {
      this.charIndex--;
      this.displayRole.set(current.substring(0, this.charIndex));

      if (this.charIndex === 0) {
        // Move to next role
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.typeTimer = setTimeout(() => this.tick(), PAUSE_BEFORE);
        return;
      }
      this.typeTimer = setTimeout(() => this.tick(), DELETING_SPEED);
    }
  }

  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' });
  }
}

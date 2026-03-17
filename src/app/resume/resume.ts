import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  readonly driveViewUrl  = 'https://drive.google.com/file/d/1m9oz8MrXoB5AxAYLaAXHd0ytoaBxmJJa/view';
  readonly downloadUrl   = 'https://drive.google.com/uc?export=download&id=1m9oz8MrXoB5AxAYLaAXHd0ytoaBxmJJa';
}

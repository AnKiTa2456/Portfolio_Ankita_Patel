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
  readonly driveViewUrl  = '/Ankita-Patel-Resume.pdf';
  readonly downloadUrl   = '/Ankita-Patel-Resume.pdf';
}

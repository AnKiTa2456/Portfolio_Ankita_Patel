import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly stats = [
    { value: '4',   label: 'Roles & Internships' },
    { value: '7.97', label: 'B.Tech CGPA' },
    { value: '3+',  label: 'Projects Built' },
    { value: '25+', label: 'Tech Skills' },
  ];

  readonly highlights = [
    {
      icon: 'code',
      title: 'Versatile & Motivated',
      description:
        'Always eager to take on new challenges. I adapt quickly to new technologies and thrive in environments that push me to grow.',
    },
    {
      icon: 'layers',
      title: 'Full-Stack Awareness',
      description:
        'Strong frontend foundation with React, Angular, and Next.js, plus backend experience in Node.js, Express, and databases like MongoDB and PostgreSQL.',
    },
    {
      icon: 'zap',
      title: 'Results-Driven',
      description:
        'I care about real impact — clean UI, smooth UX, and code that is maintainable. With a positive attitude and growth mindset, I ship what matters.',
    },
  ];
}

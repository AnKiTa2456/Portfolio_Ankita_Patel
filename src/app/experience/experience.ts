import { Component, inject } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  private readonly dataService = inject(DataService);
  readonly experiences = this.dataService.experiences;
}

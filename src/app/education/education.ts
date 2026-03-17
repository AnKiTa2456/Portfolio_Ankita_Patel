import { Component, inject } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  private readonly dataService = inject(DataService);
  readonly education = this.dataService.education;
}

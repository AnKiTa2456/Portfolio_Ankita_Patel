import { Component, inject } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { ProjectCard } from './project-card/project-card';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly dataService = inject(DataService);
  readonly projects = this.dataService.projects;
}

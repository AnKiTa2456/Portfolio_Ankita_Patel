import { Component, inject } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { DataService } from '../services/data.service';
import { Skill } from '../models/index';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private readonly dataService = inject(DataService);

  readonly frontendSkills = this.dataService.skills.filter(s => s.category === 'frontend');
  readonly backendSkills  = this.dataService.skills.filter(s => s.category === 'backend');
  readonly toolsSkills    = this.dataService.skills.filter(s => s.category === 'tools');

  readonly categories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: 'monitor',
      skills: this.frontendSkills,
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: 'server',
      skills: this.backendSkills,
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: 'tool',
      skills: this.toolsSkills,
    },
  ];

  /**
   * Returns a lighter tinted background for the skill chip using the brand color.
   * We keep the opacity low so it works in both light and dark themes.
   */
  getSkillBg(color: string): string {
    return `${color}1a`; // 10% opacity hex
  }

  /** Truncate hex to get a readable text color for dark backgrounds */
  getSkillTextColor(color: string): string {
    return color;
  }
}

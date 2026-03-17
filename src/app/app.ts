import { Component, OnInit, inject } from '@angular/core';
import { Header }     from './header/header';
import { Hero }       from './hero/hero';
import { About }      from './about/about';
import { Projects }   from './projects/projects';
import { Skills }     from './skills/skills';
import { Experience } from './experience/experience';
import { Education }  from './education/education';
import { Resume }     from './resume/resume';
import { Contact }    from './contact/contact';
import { Footer }     from './footer/footer';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, About, Projects, Skills, Experience, Education, Resume, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly themeService = inject(ThemeService);
  ngOnInit(): void { this.themeService.initTheme(); }
}

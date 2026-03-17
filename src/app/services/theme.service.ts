import { Injectable, signal } from '@angular/core';

/**
 * ThemeService manages the dark/light mode preference.
 * - Reads the user's OS preference on first visit
 * - Persists the choice to localStorage for subsequent visits
 * - Applies 'data-theme' attribute to <html> so CSS variables respond
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';

  /** Reactive signal consumed by the header toggle button */
  readonly isDark = signal<boolean>(false);

  /** Called once in AppComponent.ngOnInit to bootstrap the theme */
  initTheme(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme(saved ? saved === 'dark' : prefersDark);
  }

  toggleTheme(): void {
    this.applyTheme(!this.isDark());
  }

  private applyTheme(dark: boolean): void {
    this.isDark.set(dark);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem(this.STORAGE_KEY, dark ? 'dark' : 'light');
  }
}

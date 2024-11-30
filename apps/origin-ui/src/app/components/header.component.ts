import {Component} from "@angular/core";
import {AppThemeToggleComponent} from "./theme-toggle.component";

@Component({
  selector: 'app-component-header',
  standalone: true,
  imports: [AppThemeToggleComponent],
  template: `
    <header>
      <div class="px-4 sm:px-6">
        <div class="mx-auto mb-16 flex h-[72px] w-full max-w-6xl items-center justify-between gap-3 border-b border-border/70">
          <a
            href="/"
            aria-label="Home"
            class="rounded-full outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
          >
            <span class="sr-only">Origin UI</span>
            <svg class="stroke-zinc-800 dark:stroke-zinc-100"
                 xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="16" cy="16" r="12" fill="none" stroke-width="8"></circle>
            </svg>
          </a>
          <div class="flex items-center gap-2">
            <app-components-theme-toggle />
          </div>
        </div>
      </div>
    </header>
  `
})
export default class AppHeaderComponent {}

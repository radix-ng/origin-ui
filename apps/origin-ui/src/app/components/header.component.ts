import { Component } from '@angular/core';
import { GithubButtonComponent } from './github-button.component';
import { AppThemeToggleComponent } from './theme-toggle.component';
import { TwitterButton } from './twitter-button';

@Component({
    selector: 'app-component-header',
    imports: [AppThemeToggleComponent, GithubButtonComponent, TwitterButton],
    template: `
        <header>
            <div class="px-4 sm:px-6">
                <div
                    class="border-border/70 mx-auto mb-16 flex h-[72px] w-full max-w-6xl items-center justify-between gap-3 border-b"
                >
                    <a
                        class="focus-visible:outline-ring/70 rounded-full outline-offset-2 focus-visible:outline focus-visible:outline-2"
                        href="/"
                        aria-label="Home"
                    >
                        <span class="sr-only">Origin UI</span>
                        <svg
                            class="stroke-zinc-800 dark:stroke-zinc-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                        >
                            <circle cx="16" cy="16" r="12" fill="none" stroke-width="8"></circle>
                        </svg>
                    </a>
                    <div class="flex items-center gap-2">
                        <app-github-button />
                        <app-components-theme-toggle />
                        <app-twitter-button />
                    </div>
                </div>
            </div>
        </header>
    `
})
export default class AppHeaderComponent {}

import { Component } from '@angular/core';
import { GithubButtonComponent } from './github-button.component';
import { AppThemeToggleComponent } from './theme-toggle.component';
import { TwitterButton } from './twitter-button';

@Component({
    selector: 'app-component-header',
    imports: [AppThemeToggleComponent, GithubButtonComponent, TwitterButton],
    template: `
        <header
            class="before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative mb-14 before:absolute before:-inset-x-32 before:bottom-0 before:h-px"
        >
            <div
                class="before:bg-ring/50 after:bg-ring/50 before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-right-12 after:-bottom-px after:z-10 after:-mr-px after:size-[3px]"
                aria-hidden="true"
            ></div>
            <div class="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3">
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
        </header>
    `
})
export default class AppHeaderComponent {}

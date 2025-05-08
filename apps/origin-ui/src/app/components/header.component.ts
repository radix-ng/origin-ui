import { Component } from '@angular/core';
import { GithubButtonComponent } from './github-button.component';
import { LogoDark, LogoWhite } from './logo';
import { AppThemeToggleComponent } from './theme-toggle.component';
import { TwitterButton } from './twitter-button';

@Component({
    selector: 'app-header',
    imports: [AppThemeToggleComponent, GithubButtonComponent, TwitterButton, LogoWhite, LogoDark],
    template: `
        <header
            class="before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative mb-14 before:absolute before:-inset-x-32 before:bottom-0 before:h-px"
        >
            <div
                class="before:bg-ring/50 after:bg-ring/50 before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-right-12 after:-bottom-px after:z-10 after:-mr-px after:size-[3px]"
                aria-hidden="true"
            ></div>
            <div class="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3">
                <a class="shrink-0" href="/" aria-label="Home">
                    <span class="sr-only">Origin UI</span>
                    <logo-dark class="hidden dark:block" />
                    <logo-white class="dark:hidden" />
                </a>
                <div class="flex items-center gap-1">
                    <app-github-button />
                    <app-twitter-button />
                    <app-components-theme-toggle />
                </div>
            </div>
        </header>
    `
})
export default class AppHeaderComponent {}

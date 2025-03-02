import { NgIf } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
    selector: 'app-components-theme-toggle',
    imports: [NgIf],
    template: `
        <div class="flex flex-col justify-center">
            <input
                class="peer sr-only"
                id="theme-toggle"
                [checked]="isLightTheme()"
                (change)="toggleTheme()"
                type="checkbox"
                name="theme-toggle"
                aria-label="Toggle dark mode"
            />
            <label
                class="bg-background hover:bg-accent peer-focus-visible:outline-ring/70 relative inline-flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors peer-focus-visible:outline peer-focus-visible:outline-2"
                for="theme-toggle"
                aria-hidden="true"
            >
                <!-- Sun Icon -->
                <svg
                    class="dark:hidden"
                    *ngIf="isLightTheme()"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        class="fill-zinc-400"
                        d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                    />
                    <path class="fill-zinc-500" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                </svg>
                <!-- Moon Icon -->
                <svg
                    class="hidden dark:block"
                    *ngIf="!isLightTheme()"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        class="fill-zinc-500"
                        d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                    />
                    <path
                        class="fill-zinc-600"
                        d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                    />
                </svg>
                <span class="sr-only">Switch to light / dark version</span>
            </label>
        </div>
    `
})
export class AppThemeToggleComponent {
    readonly theme = signal<'light' | 'dark'>(this.getInitialTheme());

    readonly isLightTheme = computed(() => this.theme() === 'light');

    constructor() {
        if (this.isBrowser()) {
            effect(() => {
                const currentTheme = this.theme();
                localStorage.setItem('theme', currentTheme);

                if (currentTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            });
        }
    }

    toggleTheme() {
        if (this.isBrowser()) {
            this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
        }
    }

    private getInitialTheme(): 'light' | 'dark' {
        if (this.isBrowser()) {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light' || savedTheme === 'dark') {
                return savedTheme;
            }

            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        return 'light';
    }

    private isBrowser(): boolean {
        return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    }
}

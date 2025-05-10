import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';

@Component({
    selector: 'app-cta',
    imports: [
        OriButton
    ],
    template: `
        <div class="mt-16 text-center md:mt-20">
            <div class="relative z-10 text-center">
                <h2
                    class="font-heading text-foreground mb-4 font-serif text-3xl/[1.1] tracking-tight text-balance md:text-4xl/[1.1]"
                >
                    <span class="block">Didn&apos;t find what you were looking for?</span>
                </h2>

                <p class="text-muted-foreground mx-auto max-w-xl text-base text-balance">
                    Explore the original Origin UI or contribute by suggesting new components and improvements.
                </p>

                <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <a
                        oriButton
                        variant="secondary"
                        href="https://originui.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Send a suggestion to the Origin UI - Svelte repository"
                    >
                        Visit Original
                    </a>

                    <a
                        class="rounded-full"
                        oriButton
                        href="https://github.com/radix-ng/origin-ui/discussions/categories/suggestions"
                        target="_blank"
                    >
                        <span class="text-primary-foreground">Suggest component</span>
                    </a>
                </div>
            </div>
        </div>
    `
})
export class Cta {}

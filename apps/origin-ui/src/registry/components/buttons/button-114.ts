import { Component } from '@angular/core';
import { OriButton } from '~/registry/ui/button';
import { ChevronDown, GitFork, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-button-114',
    imports: [OriButton, LucideAngularModule],
    template: `
        <div
            class="divide-primary-foreground/30 inline-flex -space-x-px divide-x rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse"
        >
            <button class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10" oriButton>
                <lucide-angular
                    class="me-2 opacity-60"
                    [img]="GitForkIcon"
                    size="16"
                    strokeWidth="2"
                    aria-hidden="true"
                />
                Fork
                <span
                    class="border-primary-foreground/30 text-primary-foreground/60 -me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
                >
                    18
                </span>
            </button>
            <button
                class="rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                oriButton
                size="icon"
                aria-label="Options"
            >
                <lucide-angular [img]="ChevronDownIcon" size="16" strokeWidth="2" aria-hidden="true" />
            </button>
        </div>
    `
})
export default class Button114Component {
    protected readonly GitForkIcon = GitFork;
    protected readonly ChevronDownIcon = ChevronDown;
}

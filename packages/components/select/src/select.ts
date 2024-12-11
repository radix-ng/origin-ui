import { Component } from '@angular/core';
import {
    RdxSelectComponent,
    RdxSelectIconDirective,
    RdxSelectTriggerDirective,
    RdxSelectValueDirective
} from '@radix-ng/primitives/select';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'ori-select-trigger',
    standalone: true,
    imports: [
        RdxSelectTriggerDirective,
        LucideAngularModule,
        RdxSelectIconDirective
    ],
    template: `
        <button
            class="border-input bg-background text-foreground focus:border-ring focus:ring-ring/20 data-[placeholder]:text-muted-foreground/70 flex h-9 w-full items-center justify-between gap-2 rounded-lg border px-3 py-2 text-start text-sm shadow-sm shadow-black/5 focus:outline-none focus:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 [&>span]:min-w-0"
            rdxSelectTrigger
        >
            <ng-content />
            <lucide-angular [img]="ChevronDownIcon" size="16" rdxSelectIcon />
        </button>
    `
})
export class OriSelectTrigger {
    readonly ChevronDownIcon = ChevronDown;
}

@Component({
    selector: 'ori-select-value',
    standalone: true,
    imports: [RdxSelectValueDirective],
    template: `
        <span rdxSelectValue placeholder="Select a fruit…"></span>
    `
})
export class OriSelectValue {}

@Component({
    selector: 'ori-select, [ori-select]',
    standalone: true,
    imports: [RdxSelectComponent],
    template: `
        <ng-content></ng-content>
    `
})
export class OriSelect {}

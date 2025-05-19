import { Component, computed, Directive, input } from '@angular/core';
import {
    RdxAccordionContentDirective,
    RdxAccordionHeaderDirective,
    RdxAccordionItemDirective,
    RdxAccordionRootDirective,
    RdxAccordionTriggerDirective
} from '@radix-ng/primitives/accordion';
import { ClassValue } from 'clsx';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import { cn } from '~/registry/default/lib/utils';

@Directive({
    selector: '[oriAccordion]',
    hostDirectives: [
        {
            directive: RdxAccordionRootDirective,
            inputs: ['orientation', 'type', 'value', 'defaultValue', 'collapsible', 'dir', 'disabled']
        }
    ],
    host: {
        'data-slot': 'accordion'
    }
})
export class OriAccordion {}

@Directive({
    selector: '[oriAccordionItem]',
    hostDirectives: [
        {
            directive: RdxAccordionItemDirective,
            inputs: ['disabled', 'value']
        }
    ],
    host: {
        '[class]': 'hostClasses()',
        'data-slot': 'accordion-item'
    }
})
export class OriAccordionItem {
    readonly class = input<ClassValue>();

    readonly hostClasses = computed(() => {
        return cn('border-b last:border-b-0', this.class());
    });
}

@Component({
    selector: '[oriAccordionTrigger], ori-accordion-trigger',
    imports: [RdxAccordionHeaderDirective, LucideAngularModule, RdxAccordionTriggerDirective],
    template: `
        <h3 class="group flex" rdxAccordionHeader>
            <button
                [class]="
                    cn(
                        'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-semibold transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>*>svg]:rotate-180',
                        classTrigger()
                    )
                "
                rdxAccordionTrigger
            >
                <ng-content />
                <lucide-icon
                    class="pointer-events-none shrink-0 opacity-80 transition-transform duration-200"
                    [img]="ChevronDown"
                    size="16"
                    aria-hidden="true"
                />
            </button>
        </h3>
    `
})
export class OriAccordionTrigger {
    readonly classTrigger = input<ClassValue>();

    protected readonly ChevronDown = ChevronDown;
    protected readonly cn = cn;
}

@Component({
    selector: '[oriAccordionContent]',
    hostDirectives: [RdxAccordionContentDirective],
    host: {
        '[class]':
            '"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"',
        'data-slot': 'accordion-content'
    },
    template: `
        <div [class]="cn('pt-0 pb-4', this.classContent())">
            <ng-content />
        </div>
    `
})
export class OriAccordionContent {
    readonly classContent = input<ClassValue>();

    protected readonly cn = cn;
}

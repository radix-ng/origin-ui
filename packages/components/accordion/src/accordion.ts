import { Component, computed, Directive, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import {
    RdxAccordionContentDirective,
    RdxAccordionHeaderDirective,
    RdxAccordionItemDirective,
    RdxAccordionRootDirective,
    RdxAccordionTriggerDirective
} from '@radix-ng/primitives/accordion';
import { ClassValue } from 'clsx';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Directive({
    selector: '[oriAccordion]',
    hostDirectives: [
        {
            directive: RdxAccordionRootDirective,
            inputs: ['orientation', 'type', 'value', 'defaultValue', 'collapsible', 'dir', 'disabled']
        }
    ]
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
        '[class]': 'hostClasses()'
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
            <button [class]="computedClass()" rdxAccordionTrigger>
                <ng-content></ng-content>
                <lucide-icon
                    class="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                    [img]="ChevronDown"
                    size="16"
                    aria-hidden="true"
                />
            </button>
        </h3>
    `
})
export class OriAccordionTrigger {
    readonly class = input<ClassValue>();

    readonly computedClass = computed(() => {
        return cn(
            //'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline group-data-[state=open]:[&>*>svg]:rotate-180',
            'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-semibold transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 group-data-[state=open]:[&>*>svg]:rotate-180',
            this.class()
        );
    });
    protected readonly ChevronDown = ChevronDown;
}

@Component({
    selector: '[oriAccordionContent], ori-accordion-content',
    hostDirectives: [RdxAccordionContentDirective],
    host: {
        class: 'overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    },
    template: `
        <div [class]="computedClass()">
            <ng-content />
        </div>
    `
})
export class UbAccordionContent {
    readonly class = input<ClassValue>();

    readonly computedClass = computed(() => {
        return cn('pb-4 pt-0', this.class());
    });
}

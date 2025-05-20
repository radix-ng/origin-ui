import { booleanAttribute, Component, input } from '@angular/core';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import {
    OriAccordion,
    OriAccordionContent,
    OriAccordionItem,
    OriAccordionTrigger
} from '~/registry/default/ui/accordion';
import { OriCollapsible, OriCollapsibleContent, OriCollapsibleTrigger } from '~/registry/default/ui/collapsible';

@Component({
    selector: 'collapsible-demo',
    imports: [
        OriCollapsible,
        OriCollapsibleTrigger,
        OriCollapsibleContent,
        LucideAngularModule
    ],
    template: `
        <div class="bg-accent border-t px-4 py-3" [open]="open()" oriCollapsible>
            <button
                class="flex gap-2 text-[15px] leading-6 font-semibold [&[data-state=open]>*>svg]:rotate-180"
                oriCollapsibleTrigger
            >
                <lucide-icon
                    class="mt-0.5 shrink-0 opacity-80 transition-transform duration-200"
                    [img]="ChevronDown"
                    size="16"
                    aria-hidden="true"
                />
                {{ title() }}
            </button>
            <div
                class="text-muted-foreground data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down mt-1 overflow-hidden ps-6 text-sm transition-all"
                oriCollapsibleContent
            >
                {{ content() }}
            </div>
        </div>
    `
})
export class CollapsibleDemo {
    readonly open = input(false, { transform: booleanAttribute });

    readonly title = input<string>('');
    readonly content = input<string>('');
    protected readonly ChevronDown = ChevronDown;
}

@Component({
    selector: 'accordion-17',
    imports: [
        OriAccordion,
        OriAccordionItem,
        OriAccordionTrigger,
        OriAccordionContent,
        CollapsibleDemo
    ],
    template: `
        <div class="space-y-4">
            <h2 class="text-xl font-bold">Multi-level</h2>
            <div class="w-full -space-y-px" defaultValue="3" type="single" collapsible oriAccordion>
                @for (item of items; track item) {
                    <div
                        class="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative border outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]"
                        [value]="item.id"
                        oriAccordionItem
                    >
                        <ori-accordion-trigger
                            classTrigger="rounded-md px-4 py-3 text-[15px] leading-6 outline-none hover:no-underline focus-visible:ring-0"
                        >
                            {{ item.title }}
                        </ori-accordion-trigger>
                        <div classContent="p-0" oriAccordionContent>
                            @for (collapsible of item.collapsibles; track $index) {
                                <collapsible-demo [title]="collapsible.title" [content]="collapsible.content" />
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    `
})
export default class Accordion17Component {
    readonly items = [
        {
            id: '1',
            title: 'What makes Origin UI different?',
            collapsibles: [
                {
                    title: 'What about performance?',
                    content: 'We optimize every component for maximum performance and minimal bundle size.'
                },
                {
                    title: 'How is the documentation?',
                    content: 'Our documentation is comprehensive and includes live examples for every component.'
                }
            ]
        },
        {
            id: '2',
            title: 'How can I customize the components?',
            collapsibles: [
                {
                    title: 'Can I use custom themes?',
                    content: 'Yes, our theming system is fully customizable and supports both light and dark modes.'
                },
                {
                    title: 'What about Tailwind support?',
                    content: 'We have first-class support for Tailwind CSS with custom utility classes.'
                }
            ]
        },
        {
            id: '3',
            title: 'Is Origin UI optimized for performance?',
            collapsibles: [
                {
                    title: "What's the bundle size impact?",
                    content: 'Our components are tree-shakeable and typically add minimal overhead to your bundle.',
                    open: true
                },
                {
                    title: 'How is code splitting handled?',
                    content: 'We support automatic code splitting for optimal loading performance.'
                }
            ]
        },
        {
            id: '4',
            title: 'How accessible are the components?',
            collapsibles: [
                {
                    title: 'Which screen readers are supported?',
                    content: 'We test with NVDA, VoiceOver, and JAWS to ensure broad compatibility.'
                },
                {
                    title: 'What about keyboard navigation?',
                    content: 'Full keyboard navigation support is implemented following WAI-ARIA best practices.'
                }
            ]
        }
    ];
}

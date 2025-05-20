import { Component } from '@angular/core';
import {
    OriAccordion,
    OriAccordionContent,
    OriAccordionItem,
    OriAccordionTrigger
} from '~/registry/default/ui/accordion';

@Component({
    selector: 'accordion-11',
    imports: [
        OriAccordion,
        OriAccordionItem,
        OriAccordionTrigger,
        OriAccordionContent
    ],
    template: `
        <div class="space-y-4">
            <h2 class="text-xl font-bold">Tabs w/ chevron</h2>
            <div class="w-full space-y-2" defaultValue="3" type="single" collapsible oriAccordion>
                @for (item of items; track item) {
                    <div
                        class="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
                        [value]="item.id"
                        oriAccordionItem
                    >
                        <ori-accordion-trigger
                            classTrigger="py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0"
                        >
                            {{ item.title }}
                        </ori-accordion-trigger>
                        <div classContent="text-muted-foreground pb-2" oriAccordionContent>
                            {{ item.content }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `
})
export default class Accordion11Component {
    readonly items = [
        {
            id: '1',
            title: 'What makes Origin UI different?',
            content:
                'Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.'
        },
        {
            id: '2',
            title: 'How can I customize the components?',
            content:
                'Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.'
        },
        {
            id: '3',
            title: 'Is Origin UI optimized for performance?',
            content:
                'Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.'
        },
        {
            id: '4',
            title: 'How accessible are the components?',
            content:
                'All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.'
        }
    ];
}

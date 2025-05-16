import { Component } from '@angular/core';
import {
    OriAccordion,
    OriAccordionItem,
    OriAccordionTrigger,
    UbAccordionContent
} from '~/registry/default/ui/accordion';

@Component({
    selector: 'accordion-01',
    imports: [
        OriAccordion,
        OriAccordionItem,
        OriAccordionTrigger,
        UbAccordionContent
    ],
    template: `
        <div class="space-y-4">
            <h2 class="text-xl font-bold">W/ chevron</h2>
            <div class="w-full" oriAccordion orientation="vertical">
                @for (item of items; track $index) {
                    <div class="py-2" [value]="item.id" oriAccordionItem>
                        <ori-accordion-trigger>{{ item.title }}</ori-accordion-trigger>
                        <div oriAccordionContent>
                            {{ item.content }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `
})
export default class Accordion01Component {
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

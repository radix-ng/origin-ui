import { Component } from '@angular/core';
import { AtSign, Command, Eclipse, LucideAngularModule, Plus, Zap } from 'lucide-angular';
import {
    OriAccordion,
    OriAccordionContent,
    OriAccordionItem,
    OriAccordionTrigger
} from '~/registry/default/ui/accordion';

@Component({
    selector: 'accordion-05',
    imports: [
        OriAccordion,
        OriAccordionItem,
        LucideAngularModule,
        OriAccordionContent,
        OriAccordionTrigger
    ],
    template: `
        <div class="space-y-4">
            <h2 class="text-xl font-bold">W/ icon and chevron</h2>
            <div class="w-full" type="single" oriAccordion collapsible defaultValue="3">
                @for (item of items; track $index) {
                    <div class="py-2" [value]="item.id" oriAccordionItem>
                        <ori-accordion-trigger classTrigger="py-2 text-[15px] leading-6 hover:no-underline">
                            <span class="flex items-center gap-3">
                                <lucide-icon
                                    class="shrink-0 opacity-60"
                                    [img]="item.icon"
                                    size="16"
                                    aria-hidden="true"
                                />
                                <span>{{ item.title }}</span>
                            </span>
                        </ori-accordion-trigger>
                        <div classContent="text-muted-foreground ps-7 pb-2" oriAccordionContent>
                            {{ item.content }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `
})
export default class Accordion05Component {
    readonly items = [
        {
            id: '1',
            icon: Command,
            title: 'What makes Origin UI different?',
            content:
                'Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.'
        },
        {
            id: '2',
            icon: Eclipse,
            title: 'How can I customize the components?',
            content:
                'Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.'
        },
        {
            id: '3',
            icon: Zap,
            title: 'Is Origin UI optimized for performance?',
            content:
                'Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.'
        },
        {
            id: '4',
            icon: AtSign,
            title: 'How accessible are the components?',
            content:
                'All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.'
        }
    ];
    protected readonly Plus = Plus;
}

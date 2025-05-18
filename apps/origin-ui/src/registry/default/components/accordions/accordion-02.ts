import { Component } from '@angular/core';
import { RdxAccordionHeaderDirective, RdxAccordionTriggerDirective } from '@radix-ng/primitives/accordion';
import { LucideAngularModule, Plus } from 'lucide-angular';
import { OriAccordion, OriAccordionContent, OriAccordionItem } from '~/registry/default/ui/accordion';

@Component({
    selector: 'accordion-02',
    imports: [
        OriAccordion,
        OriAccordionItem,
        OriAccordionContent,
        RdxAccordionHeaderDirective,
        RdxAccordionTriggerDirective,
        LucideAngularModule
    ],
    template: `
        <div class="space-y-4">
            <h2 class="text-xl font-bold">W/ plus-minus</h2>
            <div class="w-full" type="single" oriAccordion value="3">
                @for (item of items; track $index) {
                    <div class="py-2" [value]="item.id" oriAccordionItem>
                        <h3 class="group flex" rdxAccordionHeader>
                            <button
                                class="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-semibold transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 group-data-[state=open]:[&>*>svg]:rotate-180"
                                rdxAccordionTrigger
                                type="button"
                            >
                                {{ item.title }}
                                <lucide-icon
                                    class="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                                    [img]="Plus"
                                    size="16"
                                    aria-hidden="true"
                                />
                            </button>
                        </h3>
                        <div class="text-muted-foreground pb-2" oriAccordionContent>
                            {{ item.content }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `
})
export default class Accordion02Component {
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
    protected readonly Plus = Plus;
}

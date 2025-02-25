import { Component } from '@angular/core';
import { OriToggleGroupComponent, OriToggleGroupItemComponent } from '~/registry/ui/toggle-group';
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-button-107',
    imports: [OriToggleGroupComponent, OriToggleGroupItemComponent, LucideAngularModule],
    template: `
        <ori-toggle-group
            class="divide-background inline-flex gap-0 -space-x-px divide-x rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse"
            type="single"
            value="center"
        >
            <button
                class="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                oriToggleGroupItem
                aria-label="Align Left"
                value="left"
            >
                <lucide-angular [img]="AlignLeft" size="16" strokeWidth="2" aria-hidden="true" />
            </button>
            <button
                class="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                oriToggleGroupItem
                aria-label="Align Center"
                value="center"
            >
                <lucide-angular [img]="AlignCenter" size="16" strokeWidth="2" aria-hidden="true" />
            </button>
            <button
                class="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                oriToggleGroupItem
                aria-label="Align Right"
                value="right"
            >
                <lucide-angular [img]="AlignRight" size="16" strokeWidth="2" aria-hidden="true" />
            </button>
            <button
                class="bg-primary/80 text-primary-foreground hover:bg-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
                oriToggleGroupItem
                aria-label="Align Justify"
                value="justify"
            >
                <lucide-angular [img]="AlignJustify" size="16" strokeWidth="2" aria-hidden="true" />
            </button>
        </ori-toggle-group>
    `
})
export default class Button107Component {
    protected readonly AlignLeft = AlignLeft;
    protected readonly AlignCenter = AlignCenter;
    protected readonly AlignRight = AlignRight;
    protected readonly AlignJustify = AlignJustify;
}

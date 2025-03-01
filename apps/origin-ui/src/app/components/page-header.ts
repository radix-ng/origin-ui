import { Component, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';

@Component({
    selector: 'ori-page-header',
    template: `
        <div [class]="cn('mb-16 text-center', blockStyle())">
            <h1 class="font-heading text-foreground mb-3 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
                {{ title() }}
            </h1>
            <p class="text-muted-foreground text-lg">
                <ng-content />
            </p>
        </div>
    `
})
export class PageHeader {
    readonly title = input<string>();
    readonly blockStyle = input<string>();

    protected readonly cn = cn;
}

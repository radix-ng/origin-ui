import { Component, input } from '@angular/core';

@Component({
    selector: 'app-components-page-header',
    standalone: true,
    template: `
        <div class="mb-16 text-center">
            <h1 class="font-heading text-foreground mb-3 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
                {{ title() }}
            </h1>
            <p class="text-muted-foreground text-lg">
                <ng-content></ng-content>
            </p>
        </div>
    `
})
export class AppPageHeaderComponent {
    readonly title = input<string>('');
}

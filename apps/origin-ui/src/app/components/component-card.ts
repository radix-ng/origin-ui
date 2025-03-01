import { Component, computed, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import { RegistryItem } from 'shadcn-ng/registry';

@Component({
    selector: 'ori-component-card, [oriComponentCard]',
    template: `
        @if (isSearchPage()) {
            <div [class]="cn(getColSpanClasses(true), styleClasses())">
                <ng-content></ng-content>
            </div>
        } @else {
            <ng-content></ng-content>
        }
    `,
    host: {
        '[class]': 'outerClasses()'
    }
})
export class ComponentCardComponent {
    readonly isSearchPage = input<boolean>();
    readonly component = input<RegistryItem>();

    getColSpanClasses(includeStart = false): string {
        const comp = this.component();
        if (!comp?.meta) {
            return '';
        }

        const baseClasses =
            comp.meta['colSpan'] === 2
                ? 'col-span-12 sm:col-span-6 lg:col-span-6'
                : comp.meta['colSpan'] === 3
                  ? 'col-span-12 sm:col-span-12 lg:col-span-12'
                  : 'col-span-12 sm:col-span-6 lg:col-span-4';

        const startClasses =
            includeStart && comp.meta['colSpan'] !== 3
                ? comp.meta['colSpan'] === 2
                    ? 'sm:col-start-4 lg:col-start-4'
                    : 'sm:col-start-4 lg:col-start-5'
                : '';

        return cn(baseClasses, startClasses);
    }

    styleClasses(): string {
        const comp = this.component();
        if (!comp?.meta) {
            return '';
        }
        if (comp.meta['style'] === 1) {
            return 'flex justify-center items-center';
        } else if (comp.meta['style'] === 2) {
            return 'text-center';
        }
        return '';
    }

    outerClasses = computed(() => {
        return cn(
            'group/item relative border has-[[data-comp-loading=true]]:border-none',
            this.isSearchPage() ? 'col-span-12 grid grid-cols-12' : cn(this.getColSpanClasses(), this.styleClasses())
        );
    });
    protected readonly cn = cn;
}

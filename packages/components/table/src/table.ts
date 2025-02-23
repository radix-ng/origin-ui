import { computed, Directive, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';

@Directive({
    selector: 'table[oriTable]',
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriTable {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() => cn('w-full caption-bottom text-sm', this.class()));
}

@Directive({
    selector: 'thead[oriTableHeader]',
    host: {
        '[class]': 'hostClasses()',
        '[attr.data-slot]': '"table-header"'
    }
})
export class OriTableHeader {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() => cn(this.class()));
}

@Directive({
    selector: 'tbody[oriTableBody]',
    host: {
        '[class]': 'hostClasses()',
        '[attr.data-slot]': '"table-body"'
    }
})
export class OriTableBody {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() => cn('[&_tr:last-child]:border-0', this.class()));
}

@Directive({
    selector: 'tfoot[oriTableFooter]',
    host: {
        '[class]': 'hostClasses()',
        '[attr.data-slot]': '"table-footer"'
    }
})
export class OriTableFooter {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() =>
        cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', this.class())
    );
}

@Directive({
    selector: 'tr[oriTableRow]',
    host: {
        '[class]': 'hostClasses()',
        '[attr.data-slot]': '"table-row"'
    }
})
export class OriTableRow {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() =>
        cn('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', this.class())
    );
}

@Directive({
    selector: 'th[oriTableHead]',
    host: {
        '[class]': 'hostClasses()',
        '[attr.data-slot]': '"table-head"'
    }
})
export class OriTableHead {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() =>
        cn(
            'text-muted-foreground h-12 px-3 text-left align-middle font-medium has-[role=checkbox]:w-px [&:has([role=checkbox])]:pr-0',
            this.class()
        )
    );
}

@Directive({
    selector: 'td[oriTableCell]',
    host: {
        '[class]': 'hostClasses()',
        '[attr.data-slot]': '"table-cell"'
    }
})
export class OriTableCell {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() => cn('p-3 align-middle [&:has([role=checkbox])]:pr-0', this.class()));
}

@Directive({
    selector: 'caption[oriTableCaption]',
    host: {
        '[class]': 'hostClasses()',
        '[attr.data-slot]': '"table-caption"'
    }
})
export class OriTableCaption {
    readonly class = input<string>();

    protected readonly hostClasses = computed(() => cn('text-muted-foreground mt-4 text-sm', this.class()));
}

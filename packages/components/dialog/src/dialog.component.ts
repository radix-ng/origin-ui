import { Component, computed, Directive, effect, inject, input, TemplateRef } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import {
    RdxDialogCloseDirective,
    RdxDialogConfig,
    RdxDialogContentDirective,
    RdxDialogTriggerDirective
} from '@radix-ng/primitives/dialog';
import { LucideAngularModule, X } from 'lucide-angular';

@Directive({
    selector: '[oriDialogTrigger]',
    hostDirectives: [
        {
            directive: RdxDialogTriggerDirective,
            inputs: ['rdxDialogTrigger: oriDialogTrigger']
        }
    ]
})
export class OriDialogTriggerDirective {
    readonly rdxDialogTrigger = inject(RdxDialogTriggerDirective, { host: true });

    readonly oriDialogTrigger = input.required<TemplateRef<void>>();

    readonly oriDialogConfig = input<RdxDialogConfig<unknown>>();

    #config = effect(() => {
        this.rdxDialogTrigger.dialogConfig = {
            ...this.oriDialogConfig(),
            content: this.oriDialogTrigger(),
            backdropClass: this.#backdropClass
        };
    });

    #backdropClass =
        'fixed inset-0 z-[101] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'.split(
            ' '
        );
}

@Component({
    selector: 'ori-dialog-content',
    imports: [
        RdxDialogCloseDirective,
        LucideAngularModule
    ],
    hostDirectives: [RdxDialogContentDirective],
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <ng-content />

        <button
            class="focus-visible:outline-ring/70 group absolute right-3 top-3 flex size-7 items-center justify-center rounded-lg outline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none"
            rdxDialogClose
        >
            <lucide-angular
                class="opacity-60 transition-opacity group-hover:opacity-100"
                [img]="X"
                size="16"
                strokeWidth="2"
            />
            <span class="sr-only">Close</span>
        </button>
    `
})
export class OriDialogComponent {
    readonly class = input<string>();
    protected readonly computedClass = computed(() =>
        cn(
            'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-1/2 top-1/2 z-[101] grid max-h-[calc(100%-4rem)] w-full -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto border p-6 shadow-lg shadow-black/5 duration-200 sm:max-w-[400px] sm:rounded-xl',
            this.class()
        )
    );

    protected readonly cn = cn;
    protected readonly X = X;
}

@Component({
    selector: 'ori-dialog-description',
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <ng-content />
    `
})
export class OriDialogDescription {
    readonly class = input<string>();
    protected readonly computedClass = computed(() => cn('text-sm text-muted-foreground', this.class()));
}

@Component({
    selector: 'ori-dialog-header',
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <ng-content />
    `
})
export class OriDialogHeader {
    readonly class = input<string>();
    protected readonly computedClass = computed(() =>
        cn('flex flex-col space-y-1.5 text-center sm:text-left', this.class())
    );
}

@Component({
    selector: 'ori-dialog-title',
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <ng-content />
    `
})
export class OriDialogTitle {
    readonly class = input<string>();
    protected readonly computedClass = computed(() => cn('text-lg font-semibold tracking-tight', this.class()));
}

@Component({
    selector: 'ori-dialog-footer',
    host: {
        '[class]': 'computedClass()'
    },
    template: `
        <ng-content />
    `
})
export class OriDialogFooter {
    readonly class = input<string>();
    protected readonly computedClass = computed(() =>
        cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3', this.class())
    );
}

export const OriDialogOverlayClass = (clazz?: string) =>
    cn(
        'fixed inset-0 z-[101] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        clazz
    );

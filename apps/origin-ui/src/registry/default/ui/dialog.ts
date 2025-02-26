import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    effect,
    inject,
    input,
    InputSignal,
    TemplateRef
} from '@angular/core';
import { cn } from '~/registry/default/lib/utils';
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

    readonly oriDialogConfig: InputSignal<RdxDialogConfig<unknown> | undefined> = input<RdxDialogConfig<unknown>>();

    #config = effect(() => {
        this.rdxDialogTrigger.dialogConfig = {
            ...this.oriDialogConfig(),
            content: this.oriDialogTrigger(),
            backdropClass: this.#backdropClass
        };
    });

    #backdropClass = 'fixed inset-0 z-[101] bg-black/80'.split(' ');
}

@Component({
    selector: 'ori-dialog-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RdxDialogCloseDirective,
        LucideAngularModule
    ],
    hostDirectives: [RdxDialogContentDirective],
    host: {
        '[class]': 'hostClasses()'
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
    protected readonly hostClasses = computed(() =>
        cn(
            'bg-background fixed left-1/2 top-1/2 z-[101] grid max-h-[calc(100%-4rem)] w-full -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto border p-6 shadow-lg shadow-black/5  sm:max-w-[400px] sm:rounded-xl',
            this.class()
        )
    );

    protected readonly cn = cn;
    protected readonly X = X;
}

@Component({
    selector: 'ori-dialog-description',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <ng-content />
    `
})
export class OriDialogDescription {
    readonly class = input<string>();
    protected readonly hostClasses = computed(() => cn('text-sm text-muted-foreground', this.class()));
}

@Component({
    selector: 'ori-dialog-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <ng-content />
    `
})
export class OriDialogHeader {
    readonly class = input<string>();
    protected readonly hostClasses = computed(() =>
        cn('flex flex-col space-y-1.5 text-center sm:text-left', this.class())
    );
}

@Component({
    selector: 'ori-dialog-title',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <ng-content />
    `
})
export class OriDialogTitle {
    readonly class = input<string>();
    protected readonly hostClasses = computed(() => cn('text-lg font-semibold tracking-tight', this.class()));
}

@Component({
    selector: 'ori-dialog-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class]': 'hostClasses()'
    },
    template: `
        <ng-content />
    `
})
export class OriDialogFooter {
    readonly class = input<string>();
    protected readonly hostClasses = computed(() =>
        cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3', this.class())
    );
}

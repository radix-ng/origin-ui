import { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, computed, Directive, inject, input } from '@angular/core';
import { cn } from '~/registry/lib/utils';
import {
    RdxStepperIndicatorDirective,
    RdxStepperItemDirective,
    RdxStepperRootDirective,
    RdxStepperSeparatorDirective,
    RdxStepperTriggerDirective
} from '@radix-ng/primitives/stepper';
import { Check, LoaderCircle, LucideAngularModule } from 'lucide-angular';

@Directive({
    selector: '[oriStepper]',
    hostDirectives: [
        {
            directive: RdxStepperRootDirective,
            inputs: ['orientation', 'value', 'dir', 'defaultValue', 'linear'],
            outputs: ['valueChange']
        }
    ],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriStepper {
    readonly class = input<string>();

    readonly hostClasses = computed(() => {
        return cn(
            'group/stepper inline-flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col',
            this.class()
        );
    });
}

@Directive({
    selector: '[oriStepperItem]',
    hostDirectives: [
        {
            directive: RdxStepperItemDirective,
            inputs: [
                'disabled',
                'completed',
                'step'
            ]
        }
    ],
    host: {
        '[class]': 'hostClasses()',
        '[attr.data-loading]': 'isLoading()'
    }
})
export class OriStepperItem {
    readonly rdxStepper = inject(RdxStepperRootDirective, { host: true });
    readonly rdxStepperItem = inject(RdxStepperItemDirective, { host: true });

    readonly class = input<string>();

    readonly loading = input<boolean, BooleanInput>(false, { transform: booleanAttribute });

    readonly hostClasses = computed(() => {
        return cn(
            'group/step flex items-center group-data-[orientation=horizontal]/stepper:flex-row group-data-[orientation=vertical]/stepper:flex-col',
            this.class()
        );
    });

    readonly isLoading = computed<boolean>(() => {
        return this.loading() && this.rdxStepperItem.step() === this.rdxStepper.value();
    });
}

@Directive({
    selector: '[oriStepperTrigger]',
    hostDirectives: [RdxStepperTriggerDirective],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriStepperTrigger {
    readonly class = input<string>();

    readonly hostClasses = computed(() => {
        return cn('inline-flex items-center gap-3 disabled:pointer-events-none disabled:opacity-50', this.class());
    });
}

@Component({
    selector: 'ori-stepper-indicator,[oriStepperIndicator]',
    imports: [RdxStepperIndicatorDirective, LucideAngularModule],
    template: `
        <div
            #item="rdxStepperIndicator"
            [class]="hostClasses()"
            [attr.data-state]="item.itemContext.itemState()"
            rdxStepperIndicator
        >
            @if (asChild()) {
                <ng-content />
            } @else {
                <span
                    class="transition-all group-data-[loading=true]/step:scale-0 group-data-[state=completed]/step:scale-0 group-data-[loading=true]/step:opacity-0 group-data-[state=completed]/step:opacity-0 group-data-[loading=true]/step:transition-none"
                >
                    {{ item.itemContext.step() }}
                </span>
                <span class="absolute">
                    <lucide-angular
                        class="scale-0 opacity-0 transition-all group-data-[state=completed]/step:scale-100 group-data-[state=completed]/step:opacity-100"
                        [img]="Check"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                </span>
                @if (oriStepperItem.isLoading()) {
                    <span class="absolute transition-all">
                        <lucide-angular
                            class="animate-spin"
                            [img]="LoaderCircle"
                            size="14"
                            strokeWidth="2"
                            aria-hidden="true"
                        />
                    </span>
                }
            }
        </div>
    `
})
export class OriStepperIndicator {
    readonly oriStepperItem = inject(OriStepperItem);

    readonly asChild = input<boolean, BooleanInput>(false, { transform: booleanAttribute });

    readonly class = input<string>();

    readonly hostClasses = computed(() => {
        return cn(
            'relative flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground data-[state=active]:bg-primary data-[state=completed]:bg-primary data-[state=active]:text-primary-foreground data-[state=completed]:text-primary-foreground',
            this.class()
        );
    });
    protected readonly Check = Check;
    protected readonly LoaderCircle = LoaderCircle;
}

@Directive({
    selector: '[oriStepperSeparator]',
    hostDirectives: [
        RdxStepperSeparatorDirective
    ],
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriStepperSeparator {
    readonly class = input<string>();

    readonly hostClasses = computed(() => {
        return cn(
            'm-0.5 bg-muted group-data-[orientation=horizontal]/stepper:h-0.5 group-data-[orientation=vertical]/stepper:h-12 group-data-[orientation=horizontal]/stepper:w-full group-data-[orientation=vertical]/stepper:w-0.5 group-data-[orientation=horizontal]/stepper:flex-1 group-data-[state=completed]/step:bg-primary',
            this.class()
        );
    });
}

@Directive({
    selector: 'h3[oriStepperTitle]',
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriStepperTitle {
    readonly class = input<string>();

    readonly hostClasses = computed(() => {
        return cn('text-sm font-medium', this.class());
    });
}

@Directive({
    selector: 'p[oriStepperDescription]',
    host: {
        '[class]': 'hostClasses()'
    }
})
export class OriStepperDescription {
    readonly class = input<string>();

    readonly hostClasses = computed(() => {
        return cn('text-sm text-muted-foreground', this.class());
    });
}

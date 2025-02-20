import { BooleanInput } from '@angular/cdk/coercion';
import { booleanAttribute, Component, computed, Directive, inject, input } from '@angular/core';
import { cn } from '@origin-ui/components/utils';
import {
    RdxStepperIndicatorDirective,
    RdxStepperItemDirective,
    RdxStepperRootDirective,
    RdxStepperSeparatorDirective,
    RdxStepperTriggerDirective
} from '@radix-ng/primitives/stepper';

@Directive({
    selector: '[oriStepper]',
    hostDirectives: [
        {
            directive: RdxStepperRootDirective,
            inputs: ['orientation', 'value', 'dir', 'defaultValue', 'linear']
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
        '[class]': 'hostClasses()'
    }
})
export class OriStepperItem {
    readonly stepperItem = inject(RdxStepperItemDirective, { host: true });

    readonly class = input<string>();

    readonly hostClasses = computed(() => {
        return cn(
            'group/step flex items-center group-data-[orientation=horizontal]/stepper:flex-row group-data-[orientation=vertical]/stepper:flex-col',
            this.class()
        );
    });
}

@Directive({
    selector: '[oriStepperTrigger]',
    hostDirectives: [RdxStepperTriggerDirective],
    host: {
        '[class]': 'hostClasses()',
        '(click)': 'onClick()'
    }
})
export class OriStepperTrigger {
    private readonly stepper = inject(OriStepperItem);

    readonly class = input<string>();

    readonly hostClasses = computed(() => {
        return cn('inline-flex items-center gap-3 disabled:pointer-events-none disabled:opacity-50', this.class());
    });

    protected onClick(): void {
        console.log(this.stepper.stepperItem.step());
    }
}

@Component({
    selector: 'ori-stepper-indicator,[oriStepperIndicator]',
    imports: [RdxStepperIndicatorDirective],
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
            }
        </div>
    `
})
export class OriStepperIndicator {
    readonly asChild = input<boolean, BooleanInput>(false, { transform: booleanAttribute });

    readonly class = input<string>();

    readonly hostClasses = computed(() => {
        return cn(
            'relative flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground data-[state=active]:bg-primary data-[state=completed]:bg-primary data-[state=active]:text-primary-foreground data-[state=completed]:text-primary-foreground',
            this.class()
        );
    });
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

import { Component, signal } from '@angular/core';
import {
    OriStepper,
    OriStepperDescription,
    OriStepperIndicator,
    OriStepperItem,
    OriStepperSeparator,
    OriStepperTitle,
    OriStepperTrigger
} from '~/registry/default/ui/stepper';

@Component({
    selector: 'demo-stepper-10',
    imports: [
        OriStepper,
        OriStepperItem,
        OriStepperIndicator,
        OriStepperTrigger,
        OriStepperTitle,
        OriStepperDescription,
        OriStepperSeparator
    ],
    template: `
        <div class="space-y-8 text-center">
            <div [value]="2" oriStepper>
                @for (step of steps; track step) {
                    <div class="flex-col! relative flex-1" [step]="step.step" oriStepperItem>
                        <button class="flex-col gap-3" oriStepperTrigger>
                            <div oriStepperIndicator></div>
                            <div class="space-y-0.5 px-2">
                                <h3 oriStepperTitle>{{ step.title }}</h3>
                                <p oriStepperDescription>{{ step.description }}</p>
                            </div>
                        </button>
                        @if (step.step < steps.length) {
                            <div
                                class="absolute inset-x-0 left-[calc(50%+0.75rem+0.125rem)] top-3 -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none"
                                oriStepperSeparator
                            ></div>
                        }
                    </div>
                }
            </div>
            <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
                Stepper with titles and descriptions
            </p>
        </div>
    `
})
export default class Stepper10Component {
    readonly steps = [
        {
            step: 1,
            title: 'Step One',
            description: 'Desc for step one'
        },
        {
            step: 2,
            title: 'Step Two',
            description: 'Desc for step two'
        },
        {
            step: 3,
            title: 'Step Three',
            description: 'Desc for step three'
        }
    ];

    readonly currentStep = signal(2);

    readonly isLoading = signal<boolean>(false);

    onValueChange($event: number | undefined) {
        if ($event) {
            this.currentStep.set($event);
        }
    }

    handleNextStep() {
        this.isLoading.set(true);
        setTimeout(() => {
            this.currentStep.set(this.currentStep() + 1);
            this.isLoading.set(false);
        }, 1000);
    }
}

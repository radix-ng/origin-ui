import { Component, signal } from '@angular/core';
import {
    OriStepper,
    OriStepperIndicator,
    OriStepperItem,
    OriStepperTitle,
    OriStepperTrigger
} from '~/registry/default/ui/stepper';

@Component({
    selector: 'demo-stepper-07',
    imports: [
        OriStepper,
        OriStepperItem,
        OriStepperIndicator,
        OriStepperTrigger,
        OriStepperTitle
    ],
    template: `
        <div class="mx-auto max-w-xl space-y-8 text-center">
            <div class="items-start gap-4" [value]="2" oriStepper>
                @for (step of steps; track step) {
                    <div class="flex-1" [step]="step.step" oriStepperItem>
                        <button class="w-full flex-col items-start gap-2" oriStepperTrigger>
                            <div class="bg-border h-1 w-full" oriStepperIndicator asChild>
                                <span class="sr-only">{{ step.step }}</span>
                            </div>
                            <div class="space-y-0.5">
                                <h3 oriStepperTitle>{{ step.title }}</h3>
                            </div>
                        </button>
                    </div>
                }
            </div>
            <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">Stepper with labels</p>
        </div>
    `
})
export default class Stepper07Component {
    readonly steps = [
        {
            step: 1,
            title: 'Step One'
        },
        {
            step: 2,
            title: 'Step Two'
        },
        {
            step: 3,
            title: 'Step Three'
        },
        {
            step: 4,
            title: 'Step Four'
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

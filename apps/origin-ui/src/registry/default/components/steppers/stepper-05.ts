import { Component, signal } from '@angular/core';
import { OriButton } from '~/registry/default/ui/button';
import {
    OriStepper,
    OriStepperIndicator,
    OriStepperItem,
    OriStepperSeparator,
    OriStepperTrigger
} from '~/registry/default/ui/stepper';

@Component({
    selector: 'demo-stepper-05',
    imports: [
        OriStepper,
        OriStepperItem,
        OriStepperSeparator,
        OriStepperIndicator,
        OriStepperTrigger,
        OriButton
    ],
    template: `
        <div class="mx-auto max-w-xl space-y-8 text-center">
            <div [value]="currentStep()" (valueChange)="onValueChange($event)" oriStepper>
                @for (step of steps; track step) {
                    <div class="[&:not(:last-child)]:flex-1" [step]="step" [loading]="isLoading()" oriStepperItem>
                        <button oriStepperTrigger>
                            <div oriStepperIndicator>{{ step }}</div>
                        </button>

                        @if (step < steps.length) {
                            <div oriStepperSeparator></div>
                        }
                    </div>
                }
            </div>
            <div class="flex justify-center space-x-4">
                <button
                    class="w-32"
                    [disabled]="currentStep() === 1"
                    (click)="currentStep.set(currentStep() - 1)"
                    oriButton
                    variant="outline"
                >
                    Prev step
                </button>
                <button
                    class="w-32"
                    [disabled]="currentStep() > steps.length"
                    (click)="handleNextStep()"
                    oriButton
                    variant="outline"
                >
                    Next step
                </button>
            </div>
            <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
                Controlled stepper with checkmarks and loading state
            </p>
        </div>
    `
})
export default class Stepper05Component {
    steps = [1, 2, 3, 4];

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

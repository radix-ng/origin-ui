import { Component, signal } from '@angular/core';
import { OriButton } from '~/registry/ui/button';
import {
    OriStepper,
    OriStepperIndicator,
    OriStepperItem,
    OriStepperSeparator,
    OriStepperTrigger
} from '~/registry/ui/stepper';

@Component({
    selector: 'demo-stepper-15',
    imports: [
        OriStepper,
        OriStepperItem,
        OriStepperSeparator,
        OriStepperIndicator,
        OriStepperTrigger,
        OriButton
    ],
    template: `
        <div class="space-y-8 text-center">
            <div [value]="currentStep()" oriStepper orientation="vertical">
                @for (step of steps; track step) {
                    <div class="not-last:flex-1" [step]="step" oriStepperItem>
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
                    (click)="currentStep.set(currentStep() + 1)"
                    oriButton
                    variant="outline"
                >
                    Next step
                </button>
            </div>
            <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
                Vertical stepper with numbers and checkmarks
            </p>
        </div>
    `
})
export default class Stepper15Component {
    steps = [1, 2, 3, 4];

    readonly currentStep = signal<number>(2);
}

import { Component } from '@angular/core';
import {
    OriStepper,
    OriStepperIndicator,
    OriStepperItem,
    OriStepperSeparator,
    OriStepperTrigger
} from '@origin-ui/components/stepper';

@Component({
    selector: 'demo-stepper-01',
    imports: [
        OriStepper,
        OriStepperItem,
        OriStepperSeparator,
        OriStepperIndicator,
        OriStepperTrigger
    ],
    template: `
        <div class="mx-auto max-w-xl space-y-8 text-center">
            <div [value]="1" oriStepper>
                @for (step of steps; track step) {
                    <div class="[&:not(:last-child)]:flex-1" [step]="step" oriStepperItem>
                        <button oriStepperTrigger>
                            <div oriStepperIndicator asChild>{{ step }}</div>
                        </button>

                        @if (step < steps.length) {
                            <div oriStepperSeparator></div>
                        }
                    </div>
                }
            </div>
            <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">Stepper with numbers only</p>
        </div>
    `
})
export default class Stepper01Component {
    steps = [1, 2, 3, 4];
}

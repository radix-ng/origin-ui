import { Component } from '@angular/core';
import {
    OriStepper,
    OriStepperIndicator,
    OriStepperItem,
    OriStepperSeparator,
    OriStepperTrigger
} from '~/registry/ui/stepper';

@Component({
    selector: 'demo-stepper-14',
    imports: [
        OriStepper,
        OriStepperItem,
        OriStepperSeparator,
        OriStepperIndicator,
        OriStepperTrigger
    ],
    template: `
        <div class="space-y-8 text-center">
            <div [value]="2" oriStepper orientation="vertical">
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
            <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
                Vertical stepper with numbers and checkmarks
            </p>
        </div>
    `
})
export default class Stepper14Component {
    steps = [1, 2, 3, 4];
}

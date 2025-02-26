import { Component } from '@angular/core';
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
    selector: 'demo-stepper-17',
    imports: [
        OriStepper,
        OriStepperItem,
        OriStepperSeparator,
        OriStepperIndicator,
        OriStepperTrigger,
        OriStepperTitle,
        OriStepperDescription
    ],
    template: `
        <div class="space-y-8 text-center">
            <div [value]="2" oriStepper orientation="vertical">
                @for (step of steps; track step) {
                    <div class="not-last:flex-1 relative items-start" [step]="step.step" oriStepperItem>
                        <button class="items-start pb-12 last:pb-0" oriStepperTrigger>
                            <div oriStepperIndicator></div>
                            <div class="mt-0.5 space-y-0.5 px-2 text-left">
                                <h3 oriStepperTitle>{{ step.title }}</h3>
                                <p oriStepperDescription>{{ step.description }}</p>
                            </div>
                        </button>

                        @if (step.step < steps.length) {
                            <div
                                class="absolute inset-y-0 left-3 top-[calc(1.5rem+0.125rem)] -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none"
                                oriStepperSeparator
                            ></div>
                        }
                    </div>
                }
            </div>
            <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
                Vertical stepper with inline titles and descriptions
            </p>
        </div>
    `
})
export default class Stepper17Component {
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
}

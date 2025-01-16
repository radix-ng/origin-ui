import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { LoaderCircle, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-button-90',
    imports: [OriButton, LucideAngularModule],
    template: `
        <button disabled oriButton>
            <lucide-angular
                class="mr-2 h-4 w-4 animate-spin"
                [img]="LoaderCircle"
                size="16"
                strokeWidth="2"
                aria-hidden="true"
            />
            Button
        </button>
    `
})
export default class Button90Component {
    protected readonly LoaderCircle = LoaderCircle;
}

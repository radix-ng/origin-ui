import { Component, signal } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { LoaderCircle, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-button-91',
    imports: [OriButton, LucideAngularModule],
    template: `
        <ori-button
            class="group relative disabled:opacity-100"
            [disabled]="isLoading()"
            [attr.data-loading]="isLoading()"
            (click)="handleClick()"
        >
            <span class="group-data-[loading=true]:text-transparent">Click me</span>
            @if (isLoading()) {
                <div class="absolute inset-0 flex items-center justify-center">
                    <lucide-angular
                        class="animate-spin"
                        [img]="LoaderCircle"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                </div>
            }
        </ori-button>
    `
})
export default class Button91Component {
    protected readonly LoaderCircle = LoaderCircle;

    readonly isLoading = signal<boolean>(false);

    handleClick() {
        this.isLoading.set(true);

        setTimeout(() => {
            this.isLoading.set(false);
        }, 1000);
    }
}

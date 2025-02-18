import { Component } from '@angular/core';
import { CircleAlert, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-alert-04',
    imports: [
        LucideAngularModule
    ],
    template: `
        <div class="rounded-lg border border-red-500/50 px-4 py-3 text-red-600">
            <p class="text-sm">
                <lucide-angular
                    class="[&>svg]:-mt-0.5 [&>svg]:me-3 [&>svg]:inline-flex [&>svg]:opacity-60"
                    [img]="CircleAlert"
                    size="16"
                    strokeWidth="2"
                    aria-hidden="true"
                />
                An error occurred!
            </p>
        </div>
    `
})
export default class Alert04Component {
    protected readonly CircleAlert = CircleAlert;
}

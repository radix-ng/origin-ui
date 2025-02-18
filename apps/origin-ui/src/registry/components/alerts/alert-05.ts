import { Component } from '@angular/core';
import { CircleCheck, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-alert-05',
    imports: [
        LucideAngularModule
    ],
    template: `
        <div class="border-eborder rounded-lg border px-4 py-3">
            <p class="text-sm">
                <lucide-angular
                    class="[&>svg]:-mt-0.5 [&>svg]:me-3 [&>svg]:inline-flex [&>svg]:text-emerald-500"
                    [img]="CircleCheck"
                    size="16"
                    strokeWidth="2"
                    aria-hidden="true"
                />
                Completed successfully!
            </p>
        </div>
    `
})
export default class Alert05Component {
    protected readonly CircleCheck = CircleCheck;
}

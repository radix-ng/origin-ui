import { Component } from '@angular/core';
import { CircleCheck, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-alert-06',
    imports: [
        LucideAngularModule
    ],
    template: `
        <div class="rounded-lg border border-emerald-500/50 px-4 py-3 text-emerald-600">
            <p class="text-sm">
                <lucide-angular
                    class="[&>svg]:-mt-0.5 [&>svg]:me-3 [&>svg]:inline-flex [&>svg]:opacity-60"
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
export default class Alert06Component {
    protected readonly CircleCheck = CircleCheck;
}

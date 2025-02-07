import { Component } from '@angular/core';
import { LucideAngularModule, TriangleAlert } from 'lucide-angular';

@Component({
    selector: 'demo-alert-03',
    imports: [
        LucideAngularModule
    ],
    template: `
        <div class="border-border rounded-lg border px-4 py-3">
            <p class="text-sm">
                <lucide-angular
                    class="[&>svg]:-mt-0.5 [&>svg]:me-3 [&>svg]:inline-flex [&>svg]:text-red-500"
                    [img]="TriangleAlert"
                    size="16"
                    strokeWidth="2"
                    aria-hidden="true"
                />
                Some information is missing!
            </p>
        </div>
    `
})
export default class Alert03Component {
    protected readonly TriangleAlert = TriangleAlert;
}

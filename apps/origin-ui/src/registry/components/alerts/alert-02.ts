import { Component } from '@angular/core';
import { LucideAngularModule, TriangleAlert } from 'lucide-angular';

@Component({
    selector: 'demo-alert-02',
    imports: [
        LucideAngularModule
    ],
    template: `
        <div class="rounded-lg border border-amber-500/50 px-4 py-3 text-amber-600">
            <p class="text-sm">
                <lucide-angular
                    class="[&>svg]:-mt-0.5 [&>svg]:me-3 [&>svg]:inline-flex [&>svg]:opacity-60"
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
export default class Alert02Component {
    protected readonly TriangleAlert = TriangleAlert;
}

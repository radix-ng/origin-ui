import { Component } from '@angular/core';
import { OriButton } from '~/registry/default/ui/button';
import { Archive, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-button-04',
    imports: [OriButton, LucideAngularModule],
    template: `
        <button oriButton>
            <lucide-angular class="icon-wrapper" [img]="ArchiveIcon" size="16" strokeWidth="2" aria-hidden="true" />
            Button
        </button>
    `,
    styles: `
        ::ng-deep .icon-wrapper svg {
            @apply -ms-1 me-2 opacity-60;
        }
    `
})
export default class Button04Component {
    readonly ArchiveIcon = Archive;
}

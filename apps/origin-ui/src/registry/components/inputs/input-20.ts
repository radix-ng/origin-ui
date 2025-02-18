import { Component } from '@angular/core';
import { OriInput } from '~/registry/ui/input';
import { OriLabel } from '~/registry/ui/label';
import { Download, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-input-20',
    imports: [OriInput, OriLabel, LucideAngularModule],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="input-20">Input with end icon button</label>
            <div class="flex rounded-lg shadow-sm shadow-black/5">
                <input
                    class="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
                    id="input-20"
                    oriInput
                    placeholder="Email"
                    type="email"
                />
                <button
                    class="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground focus-visible:outline-ring/70 inline-flex w-9 items-center justify-center rounded-e-lg border text-sm outline-offset-2 transition-colors focus:z-10 focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Subscribe"
                >
                    <lucide-angular [img]="DownloadIcon" size="16" strokeWidth="2" aria-hidden="true" />
                </button>
            </div>
        </div>
    `
})
export default class Input20Component {
    readonly DownloadIcon = Download;
}

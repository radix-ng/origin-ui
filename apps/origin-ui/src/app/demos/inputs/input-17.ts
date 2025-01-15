import { Component } from '@angular/core';
import { OriInput } from '@origin-ui/components/input';
import { OriLabel } from '@origin-ui/components/label';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-input-17',
    imports: [OriInput, OriLabel, LucideAngularModule],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="input-17">Input with start select</label>
            <div class="flex rounded-lg shadow-sm shadow-black/5">
                <div class="relative">
                    <select
                        class="border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:ring-ring/20 peer inline-flex h-full appearance-none items-center rounded-none rounded-s-lg border pe-8 ps-3 text-sm transition-shadow focus:z-10 focus-visible:outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Protocol"
                    >
                        <option value="https://">https://</option>
                        <option value="http://">http://</option>
                        <option value="ftp://">ftp://</option>
                        <option value="sftp://">sftp://</option>
                        <option value="ws://">ws://</option>
                        <option value="wss://">wss://</option>
                    </select>
                    <span
                        class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 z-10 flex h-full w-9 items-center justify-center peer-disabled:opacity-50"
                    >
                        <lucide-angular [img]="ChevronDown" size="16" strokeWidth="2" aria-hidden="true" role="img" />
                    </span>
                </div>
                <input
                    class="-ms-px rounded-s-none shadow-none focus-visible:z-10"
                    id="input-17"
                    oriInput
                    placeholder="192.168.1.1"
                    type="text"
                />
            </div>
        </div>
    `
})
export default class Input17Component {
    protected readonly ChevronDown = ChevronDown;
}

import { Component } from '@angular/core';
import { OriInput } from '@origin-ui/components/input';
import { OriLabel } from '@origin-ui/components/label';
import { Eye, EyeOff, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-input-23',
    standalone: true,
    imports: [OriInput, OriLabel, LucideAngularModule],
    template: `
        <div class="space-y-2">
            <ori-label [htmlFor]="'input-23'">Show/hide password input</ori-label>
            <div class="relative">
                <ori-input
                    class="contents pe-9"
                    [id]="'input-23'"
                    [type]="isVisible ? 'text' : 'password'"
                    placeholder="Password"
                />
                <button
                    class="text-muted-foreground/80 hover:text-foreground focus-visible:outline-ring/70 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg outline-offset-2 transition-colors focus:z-10 focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    [attr.aria-pressed]="isVisible"
                    [attr.aria-label]="isVisible ? 'Hide password' : 'Show password'"
                    (click)="toggleVisibility()"
                    type="button"
                    aria-controls="password"
                >
                    <lucide-angular
                        [img]="isVisible ? EyeOffIcon : EyeIcon"
                        size="16"
                        strokeWidth="2"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </div>
    `
})
export default class Input23Component {
    readonly EyeIcon = Eye;
    readonly EyeOffIcon = EyeOff;

    isVisible = false;

    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }
}

import { Component, computed, signal } from '@angular/core';
import { OriInput } from '~/registry/default/ui/input';
import { OriLabel } from '~/registry/default/ui/label';
import { Check, Eye, EyeOff, LucideAngularModule, X } from 'lucide-angular';

@Component({
    selector: 'demo-input-51',
    imports: [
        OriInput,
        OriLabel,
        LucideAngularModule
    ],
    template: `
        <div>
            <!--Password input field with toggle visibility button-->
            <div class="space-y-2">
                <label oriLabel htmlFor="input-51">Input with password strength indicator</label>
                <div class="relative">
                    <input
                        class="pe-9"
                        id="input-51"
                        [value]="password()"
                        [type]="isVisible() ? 'text' : 'password'"
                        [attr.aria-invalid]="strengthScore() < 4"
                        (valueChange)="password.set($event)"
                        oriInput
                        placeholder="Password"
                        aria-describedby="input-51-description"
                    />
                    <button
                        class="text-muted-foreground/80 hover:text-foreground absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center outline-none transition"
                        [attr.aria-label]="isVisible() ? 'Hide password' : 'Show password'"
                        [attr.aria-pressed]="isVisible()"
                        (click)="toggleVisibility()"
                        type="button"
                    >
                        @if (isVisible()) {
                            <lucide-angular [img]="EyeOff" size="16" strokeWidth="2" aria-hidden="true" />
                        } @else {
                            <lucide-angular [img]="Eye" size="16" strokeWidth="2" aria-hidden="true" />
                        }
                    </button>
                </div>
            </div>

            <!--Password strength indicator-->
            <div
                class="bg-border mb-4 mt-3 h-1 w-full overflow-hidden rounded-full"
                [attr.aria-valuenow]="strengthScore()"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="4"
                aria-label="Password strength"
            >
                <div
                    class="h-full transition-all duration-500 ease-out"
                    [class]="strengthColor()"
                    [style.width.%]="(strengthScore() / 4) * 100"
                ></div>
            </div>

            <!-- Password strength description -->
            <p class="mb-2 text-sm font-medium" id="password-description">{{ strengthText() }}. Must contain:</p>

            <!-- Password requirements list -->
            <ul class="space-y-1.5" aria-label="Password requirements">
                @for (req of strength(); track $index) {
                    <li class="flex items-center gap-2">
                        @if (req.met) {
                            <lucide-angular class="text-emerald-500" [img]="Check" size="16" aria-hidden="true" />
                        } @else {
                            <lucide-angular class="text-emerald-500" [img]="X" size="16" aria-hidden="true" />
                        }
                        <span class="text-xs" [class]="req.met ? 'text-emerald-500' : 'text-muted-foreground/80'">
                            {{ req.text }}
                        </span>
                        <span class="sr-only">
                            {{ req.met ? '- Requirement met' : '- Requirement not met' }}
                        </span>
                    </li>
                }
            </ul>
        </div>
    `
})
export default class Input51Component {
    protected readonly EyeOff = EyeOff;
    protected readonly Eye = Eye;
    protected readonly Check = Check;
    protected readonly X = X;

    readonly password = signal<string>('');
    readonly isVisible = signal<boolean>(false);

    requirements = [
        { regex: /.{8,}/, text: 'At least 8 characters' },
        { regex: /[0-9]/, text: 'At least 1 number' },
        { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
        { regex: /[A-Z]/, text: 'At least 1 uppercase letter' }
    ];

    strength = computed(() =>
        this.requirements.map((req) => ({
            met: req.regex.test(this.password()),
            text: req.text
        }))
    );

    strengthScore = computed(() => this.strength().filter((req) => req.met).length);

    strengthColor = computed(() => {
        const score = this.strengthScore();
        if (score === 0) return 'bg-border';
        if (score <= 1) return 'bg-red-500';
        if (score <= 2) return 'bg-orange-500';
        if (score === 3) return 'bg-amber-500';
        return 'bg-emerald-500';
    });

    strengthText = computed(() => {
        const score = this.strengthScore();
        if (score === 0) return 'Enter a password';
        if (score <= 2) return 'Weak password';
        if (score === 3) return 'Medium password';
        return 'Strong password';
    });

    toggleVisibility() {
        this.isVisible.update((prev) => !prev);
    }
}

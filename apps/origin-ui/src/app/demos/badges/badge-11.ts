import { Component } from '@angular/core';
import { badgeVariants } from '@origin-ui/components/badge';
import { OriCheckbox } from '@origin-ui/components/checkbox';
import { OriLabel } from '@origin-ui/components/label';
import { cn } from '@origin-ui/components/utils';
import { Check, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-badge-11',
    imports: [LucideAngularModule, OriLabel, OriCheckbox],
    template: `
        <ori-label
            [class]="
                cn(
                    badgeVariants({ variant: 'default' }),
                    'hover:bg-primary/80 has-[ori-checkbox>[data-state=unchecked]]:bg-muted has-[ori-checkbox>[data-state=unchecked]]:text-muted-foreground has-[:focus-visible]:outline-ring/70 cursor-pointer has-[:focus-visible]:outline has-[:focus-visible]:outline-2'
                )
            "
        >
            <div class="flex items-center gap-1">
                <ori-checkbox
                    id="badge-selectable"
                    className="peer sr-only after:absolute after:inset-0"
                    defaultChecked
                />
                <lucide-angular
                    class="hidden peer-data-[state=checked]:block"
                    [img]="CheckIcon"
                    size="12"
                    strokeWidth="2"
                    aria-hidden="true"
                />
                <span class="select-none">Selectable</span>
            </div>
        </ori-label>
    `
})
export default class Badge11Component {
    protected readonly CheckIcon = Check;
    protected readonly cn = cn;
    protected readonly badgeVariants = badgeVariants;
}

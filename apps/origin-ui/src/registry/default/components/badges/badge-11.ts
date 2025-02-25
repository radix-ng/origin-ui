import { Component } from '@angular/core';
import { badgeVariants } from '~/registry/default/ui/badge';
import { OriCheckbox } from '~/registry/default/ui/checkbox';
import { OriLabel } from '~/registry/default/ui/label';
import { cn } from '~/registry/default/lib/utils';
import { Check, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'demo-badge-11',
    imports: [LucideAngularModule, OriLabel, OriCheckbox],
    template: `
        <label
            [class]="
                cn(
                    badgeVariants({ variant: 'default' }),
                    'hover:bg-primary/80 has-[ori-checkbox>[data-state=unchecked]]:bg-muted has-[ori-checkbox>[data-state=unchecked]]:text-muted-foreground has-[:focus-visible]:outline-ring/70 cursor-pointer has-[:focus-visible]:outline has-[:focus-visible]:outline-2'
                )
            "
            oriLabel
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
        </label>
    `
})
export default class Badge11Component {
    protected readonly CheckIcon = Check;
    protected readonly cn = cn;
    protected readonly badgeVariants = badgeVariants;
}

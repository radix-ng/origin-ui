import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OriBadgeComponent } from '~/registry/default/ui/badge';
import { OriRadioGroup, OriRadioGroupItem } from '~/registry/default/ui/radio-group';

@Component({
    selector: 'demo-radio-15',
    imports: [OriRadioGroup, OriRadioGroupItem, OriBadgeComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <fieldset class="space-y-4">
            <legend class="text-foreground text-sm leading-none font-medium">Choose plan</legend>
            <ori-radio-group class="gap-0 -space-y-px rounded-md shadow-xs" value="3">
                @for (item of items; track item) {
                    <div
                        class="border-input has-data-[state=checked]:border-ring has-data-[state=checked]:bg-accent relative flex flex-col gap-4 border p-4 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10"
                    >
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <ori-radio-group-item
                                    [forId]="getRadioItemId(item)"
                                    [value]="item.value"
                                    classRadioItem="after:absolute after:inset-0"
                                />
                                <label class="inline-flex items-start" [for]="getRadioItemId(item)">
                                    {{ item.label }}
                                    @if (item.value === '2') {
                                        <ori-badge class="ms-2 -mt-1">Popular</ori-badge>
                                    }
                                </label>
                            </div>
                            <div class="text-muted-foreground text-xs leading-[inherit]">
                                {{ item.price }}
                            </div>
                        </div>
                    </div>
                }
            </ori-radio-group>
        </fieldset>
    `
})
export default class Radio15 {
    readonly id = 'radio-15';

    readonly items = [
        { value: '1', label: 'Hobby', price: '$9/mo' },
        { value: '2', label: 'Plus', price: '$29/mo' },
        { value: '3', label: 'Team', price: '$49/mo' },
        { value: '4', label: 'Enterprise', price: 'Custom' }
    ];

    getRadioItemId(item: any) {
        return `${this.id}-${item.value}`;
    }
}

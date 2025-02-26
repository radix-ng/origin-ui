import { Component, signal } from '@angular/core';
import { OriInput } from '~/registry/default/ui/input';
import { OriLabel } from '~/registry/default/ui/label';
import { OriRadioGroup, OriRadioGroupItem } from '~/registry/default/ui/radio-group';

@Component({
    selector: 'demo-radio-05',
    imports: [OriLabel, OriRadioGroup, OriRadioGroupItem, OriInput],
    template: `
        <ori-radio-group class="gap-6" [value]="selectedValue()" (onValueChange)="handleSelectedValue($event)">
            <div class="flex items-start gap-2">
                <ori-radio-group-item
                    [value]="'with-expansion'"
                    [forId]="'radio-05-with-expansion'"
                    aria-describedby="radio-05-with-expansion-description"
                    aria-controls="radio-input-05"
                />
                <div class="grow">
                    <div class="grid grow gap-2">
                        <label [htmlFor]="'radio-05-with-expansion'" oriLabel>Radio with expansion</label>
                        <p class="text-muted-foreground text-xs" id="radio-05-with-expansion-description">
                            You can use this radio with a label and a description.
                        </p>
                    </div>
                    <!--    Expandable field -->
                    <div
                        class="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
                        id="radio-input-05"
                        [attr.data-state]="selectedValue() === 'with-expansion' ? 'expanded' : 'collapsed'"
                        role="region"
                        aria-labelledby="radio-05-with-expansion"
                    >
                        <div class="pointer-events-none -m-2 overflow-hidden p-2">
                            <div class="pointer-events-auto mt-3">
                                <input
                                    id="radio-05-additional-info"
                                    [disabled]="selectedValue() !== 'with-expansion'"
                                    oriInput
                                    type="text"
                                    placeholder="Enter details"
                                    aria-label="Additional Information"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-start gap-2">
                <ori-radio-group-item
                    value="without-expansion"
                    forId="radio-05-without-expansion"
                    aria-describedby="radio-05-without-expansion-description"
                />
                <div class="grid grow gap-2">
                    <label oriLabel htmlFor="radio-05-without-expansion">Radio without expansion</label>
                    <p class="text-muted-foreground text-xs" id="radio-05-without-expansion-description">
                        You can use this checkbox with a label and a description.
                    </p>
                </div>
            </div>
        </ori-radio-group>
    `
})
export default class Radio05Component {
    readonly selectedValue = signal('without-expansion');

    handleSelectedValue(value: any) {
        this.selectedValue.set(value);
    }
}

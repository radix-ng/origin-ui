import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriRadioGroup, OriRadioGroupItem } from '@origin-ui/components/radio-group';

@Component({
    selector: 'demo-radio-04',
    imports: [OriLabel, OriRadioGroup, OriRadioGroupItem],
    template: `
        <ori-radio-group class="gap-6" [value]="'small'">
            <div class="flex items-start gap-2">
                <ori-radio-group-item
                    [value]="'small'"
                    [forId]="'radio-04-small'"
                    aria-describedby="radio-04-small-description"
                />
                <div class="grid grow gap-2">
                    <ori-label class="flex" [htmlFor]="'radio-04-small'">
                        Small{{ ' ' }}
                        <span class="text-muted-foreground text-xs font-normal leading-[inherit]">(Sublabel)</span>
                    </ori-label>
                    <p class="text-muted-foreground text-xs" id="radio-04-small-description">
                        You can use this card with a label and a description.
                    </p>
                </div>
            </div>
            <div class="flex items-start gap-2">
                <ori-radio-group-item
                    [value]="'large'"
                    [forId]="'radio-04-large'"
                    aria-describedby="radio-04-large-description"
                />
                <div class="grid grow gap-2">
                    <ori-label class="flex" [htmlFor]="'radio-04-large'">
                        Large{{ ' ' }}
                        <span class="text-muted-foreground text-xs font-normal leading-[inherit]">(Sublabel)</span>
                    </ori-label>
                    <p class="text-muted-foreground text-xs" id="radio-04-large-description">
                        You can use this card with a label and a description.
                    </p>
                </div>
            </div>
        </ori-radio-group>
    `
})
export default class Radio04Component {}

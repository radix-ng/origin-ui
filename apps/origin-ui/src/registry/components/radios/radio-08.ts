import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriRadioGroup, OriRadioGroupItem } from '~/registry/ui/radio-group';

@Component({
    selector: 'demo-radio-08',
    imports: [OriLabel, OriRadioGroup, OriRadioGroupItem],
    template: `
        <ori-radio-group class="gap-2" value="r1">
            <div
                class="border-input has-[ori-radio-group-item>[data-state=checked]]:border-ring relative flex w-full items-start gap-2 rounded-lg border p-4 shadow-sm shadow-black/5"
            >
                <ori-radio-group-item
                    class="order-1"
                    classRadioItem="after:absolute after:inset-0"
                    value="r1"
                    forId="radio-08-r1"
                    aria-describedby="radio-08-r1-description"
                />
                <div class="grid grow gap-2">
                    <label oriLabel htmlFor="radio-08-r1">
                        Label{{ ' ' }}
                        <span class="text-muted-foreground text-xs font-normal leading-[inherit]">(Sublabel)</span>
                    </label>
                    <p class="text-muted-foreground text-xs" id="radio-08-r1-description">
                        You can use this card with a label and a description.
                    </p>
                </div>
            </div>
            <!--            /* Radio card #2 */-->
            <div
                class="border-input has-[ori-radio-group-item>[data-state=checked]]:border-ring relative flex w-full items-start gap-2 rounded-lg border p-4 shadow-sm shadow-black/5"
            >
                <ori-radio-group-item
                    class="order-1"
                    classRadioItem="after:absolute after:inset-0"
                    forId="radio-08-r2"
                    value="r2"
                    aria-describedby="radio-08-r2-description"
                />
                <div class="grid grow gap-2">
                    <label oriLabel htmlFor="radio-08-r2">
                        Label{{ ' ' }}
                        <span class="text-muted-foreground text-xs font-normal leading-[inherit]">(Sublabel)</span>
                    </label>
                    <p class="text-muted-foreground text-xs" id="radio-08-r2-description">
                        You can use this card with a label and a description.
                    </p>
                </div>
            </div>
        </ori-radio-group>
    `
})
export default class Radio08Component {}

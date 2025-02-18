import { Component } from '@angular/core';
import { OriLabel } from '~/registry/ui/label';
import { OriSelectTrigger, OriSelectValue } from '~/registry/ui/select';
import { RdxSelectComponent, RdxSelectContentDirective } from '@radix-ng/primitives/select';

@Component({
    selector: 'demo-select-15',
    imports: [
        OriLabel,
        RdxSelectComponent,
        OriSelectTrigger,
        OriSelectValue,
        RdxSelectContentDirective
    ],
    template: `
        <div class="space-y-2">
            <label oriLabel htmlFor="select-15">Simple select with default value</label>
            <span rdxSelect>
                <ori-select-trigger id="select-15">
                    <ori-select-value />
                </ori-select-trigger>
                <div rdxSelectContent></div>
            </span>
        </div>
    `
})
export default class Select15Component {}

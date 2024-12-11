import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSelectTrigger, OriSelectValue } from '@origin-ui/components/select';
import { RdxSelectComponent, RdxSelectContentDirective } from '@radix-ng/primitives/select';

@Component({
    selector: 'demo-select-15',
    standalone: true,
    imports: [
        OriLabel,
        RdxSelectComponent,
        OriSelectTrigger,
        OriSelectValue,
        RdxSelectContentDirective
    ],
    template: `
        <div class="space-y-2">
            <ori-label htmlFor="select-15">Simple select with default value</ori-label>
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

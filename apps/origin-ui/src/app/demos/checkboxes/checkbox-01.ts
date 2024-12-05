import {Component} from "@angular/core";

import {OriCheckbox} from "@origin-ui/components/checkbox";
import {OriLabel} from "@origin-ui/components/label";

@Component({
    selector: "demo-checkbox-01",
    standalone:true,
    imports: [OriCheckbox, OriLabel],
    template: `
        <div class="flex items-center gap-2">
            <ori-checkbox id="checkbox-01" class="flex" />
            <ori-label htmlFor="checkbox-01">Simple checkbox</ori-label>
        </div>
   `
})
export default class Checkbox01Component {}

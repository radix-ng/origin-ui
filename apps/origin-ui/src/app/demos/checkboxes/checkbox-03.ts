import {Component} from "@angular/core";

import {OriCheckbox} from "@origin-ui/components/checkbox";
import {OriLabel} from "@origin-ui/components/label";
import {NgStyle} from "@angular/common";

@Component({
    selector: "demo-checkbox-03",
    standalone:true,
    imports: [OriCheckbox, OriLabel, NgStyle],
    template: `
        <div class="flex items-center gap-2"
         [ngStyle]="{ '--primary': '238.7 83.5% 66.7%', '--ring': '238.7 83.5% 66.7%' }">
            <ori-checkbox id="checkbox-03" class="flex" defaultChecked />
            <ori-label htmlFor="checkbox-03">Colored checkbox</ori-label>
        </div>
   `
})
export default class Checkbox03Component {}

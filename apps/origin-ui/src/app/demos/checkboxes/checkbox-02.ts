import {Component, input, signal, Signal} from "@angular/core";

import {OriCheckbox} from "@origin-ui/components/checkbox";
import {OriLabel} from "@origin-ui/components/label";

@Component({
    selector: "demo-checkbox-02",
    standalone:true,
    imports: [OriCheckbox, OriLabel],
    template: `
        <div class="flex items-center gap-2">
            <ori-checkbox id="checkbox-02" class="flex"
                          [indeterminate]="checked()"
                          (checkedChange)="onCheckedChange()"/>
            <ori-label htmlFor="checkbox-02">Indeterminate checkbox</ori-label>
        </div>
   `
})
export default class Checkbox02Component {

    checked = signal(true);

    onCheckedChange() {
        this.checked.set(false);
    }
}

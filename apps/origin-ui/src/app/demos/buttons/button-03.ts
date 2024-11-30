import {Component} from "@angular/core";
import {OriButtonComponent} from "@origin-ui/components/button";

@Component({
    selector: "demo-button-03",
    standalone:true,
    imports: [OriButtonComponent],
    template: `
        <ori-button class="rounded-full">Button</ori-button>
    `
})
export default class Button03Component {}

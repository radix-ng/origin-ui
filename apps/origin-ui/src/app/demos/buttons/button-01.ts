import {Component} from "@angular/core";
import {OriButtonComponent} from "@origin-ui/components/button";

@Component({
    selector: "demo-button-01",
    standalone:true,
    imports: [OriButtonComponent],
    template: `
        <ori-button>Button</ori-button>
    `
})
export default class Button01Component {}

import {Component} from "@angular/core";
import {OriButtonComponent} from "@origin-ui/components/button";

@Component({
    selector: "demo-button-02",
    standalone:true,
    imports: [OriButtonComponent],
    template: `
        <ori-button disabled>Button</ori-button>
    `
})
export default class Button02Component {}

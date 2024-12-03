import {Component} from "@angular/core";
import {OriButton} from "@origin-ui/components/button";

@Component({
    selector: "demo-button-02",
    standalone:true,
    imports: [OriButton],
    template: `
        <ori-button disabled>Button</ori-button>
    `
})
export default class Button02Component {}

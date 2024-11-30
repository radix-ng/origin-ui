import {Component, input} from "@angular/core";

@Component({
  selector: "app-components-page-header",
  standalone: true,
  template: `
    <div class="mb-16 text-center">
      <h1 class="mb-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        {{ title() }}
      </h1>
      <p class="text-muted-foreground">
        <ng-content></ng-content>
      </p>
    </div>
  `
})
export class AppPageHeaderComponent {
  readonly title  = input<string>("");
}

import {Component} from "@angular/core";
import {OriInputComponent} from "@origin-ui/components/input";
import {LucideAngularModule, Download} from "lucide-angular";
import {OriLabelComponent} from "@origin-ui/components/label";

@Component({
  selector: "demo-input-20",
  standalone:true,
  imports: [OriInputComponent, OriLabelComponent, LucideAngularModule],
  template: `
    <div class="space-y-2">
      <ori-label [htmlFor]="'input-20'">Input with end icon button</ori-label>
      <div class="flex rounded-lg shadow-sm shadow-black/5">
        <ori-input [id]="'input-20'"
                   class="contents"
                   className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
                   placeholder="Email"
                   type="email" />
          <button
            class="inline-flex w-9 items-center justify-center rounded-e-lg border border-input bg-background text-sm text-muted-foreground/80 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Subscribe"
          >
            <lucide-angular [img]="DownloadIcon" size="16" strokeWidth="2" aria-hidden="true" />
          </button>
      </div>
    </div>
  `
})
export default class Input20Component {
  readonly DownloadIcon = Download;
}

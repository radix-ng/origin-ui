import {Component, signal} from "@angular/core";
import {OriToggleComponent} from "@origin-ui/components/toggle";
import {LucideAngularModule, Bookmark} from "lucide-angular";

@Component({
  selector: "demo-button-04",
  standalone:true,
  imports: [OriToggleComponent, LucideAngularModule],
  template: `
        <ori-toggle
          className="group size-9 p-0 hover:bg-indigo-50 hover:text-indigo-500 data-[state=on]:bg-indigo-50 data-[state=on]:text-indigo-500"
          aria-label="Bookmark this"
          [pressed]="bookmarked()"
          (onPressedChange)="toggleBookmark()">
          <lucide-angular [img]="BookmarkIcon" size="16" strokeWidth="2" aria-hidden="true" />
        </ori-toggle>
    `
})
export default class Button04Component {
  readonly BookmarkIcon = Bookmark;

  readonly bookmarked = signal<boolean>(false);

  toggleBookmark() {
    this.bookmarked.set(!this.bookmarked());
  }
}

import {Component} from "@angular/core";
import {LucideAngularModule, ArrowRight} from "lucide-angular";
import {IllustrationComponent} from "../components/illustration.component";

@Component({
  selector: 'app-page-index',
  standalone: true,
  imports: [LucideAngularModule, IllustrationComponent],
  host: {
    class: 'contents'
  },
  template: `
    <app-illustration />
    <main>
      <div class="px-4 sm:px-6">
        <div class="mx-auto w-full max-w-3xl">

          <div class="mb-4">
            <p class="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground shadow-sm shadow-black/[.12] dark:bg-accent">
                <span class="mr-2 flex shrink-0 border-r border-border pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
                    <path
                      class="fill-zinc-500"
                      d="M6.958.713a1 1 0 0 0-1.916 0l-.999 3.33-3.33 1a1 1 0 0 0 0 1.915l3.33.999 1 3.33a1 1 0 0 0 1.915 0l.999-3.33 3.33-1a1 1 0 0 0 0-1.915l-3.33-.999-1-3.33Z"
                    />
                  </svg>
                </span>
              New releases every week
            </p>
          </div>

          <div class="mb-16">
            <h1 class="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground md:text-5xl/[1.1]">
              Beautiful UI components built with Tailwind CSS and Angular.
            </h1>
            <p class="text-lg text-muted-foreground">
              Origin UI is an extensive collection of copy-and-paste components for quickly
              building app UIs. It&lsquo;s free, open-source, and ready to drop into your
              projects.
            </p>
          </div>

          <div class="mb-12">
            <h2 class="mb-5 text-muted-foreground">Components</h2>
            <nav>
              <ul class="flex flex-col gap-2">
                <li>
                  <a
                    href="/inputs"
                    class="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                  >
                    <span class="truncate">Input and Textarea</span>
                    <lucide-angular [img]="ArrowRightIcon" size="16" class="-mr-1 ml-2 shrink-0 opacity-60"></lucide-angular>
                  </a>
                </li>
                <li>
                  <a
                    href="/buttons"
                    class="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                  >
                    <span class="truncate">Button</span>
                    <lucide-angular [img]="ArrowRightIcon" size="16" class="-mr-1 ml-2 shrink-0 opacity-60"></lucide-angular>
                  </a>
                </li>
                <li>
                  <a
                    href="/sliders"
                    class="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                  >
                    <span class="truncate">Slider</span>
                    <lucide-angular [img]="ArrowRightIcon" size="16" class="-mr-1 ml-2 shrink-0 opacity-60"></lucide-angular>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </main>
  `
})
export default class PageIndexComponent {

  readonly ArrowRightIcon = ArrowRight;
}

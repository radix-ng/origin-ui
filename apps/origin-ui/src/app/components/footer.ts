import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer
            class="before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative mt-16 py-8 before:absolute before:-inset-x-32 before:top-0 before:h-px md:mt-20"
        >
            <div
                class="before:bg-ring/50 after:bg-ring/50 before:absolute before:-top-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-top-px after:-right-12 after:z-10 after:-mr-px after:size-[3px]"
                aria-hidden="true"
            ></div>
            <div class="flex justify-between gap-2 max-sm:flex-col max-sm:text-center">
                <p class="text-muted-foreground text-sm">&copy; {{ getFullYear() }} Origin UI Angular</p>
            </div>
        </footer>
    `
})
export class Footer {
    getFullYear() {
        return new Date().getFullYear();
    }
}

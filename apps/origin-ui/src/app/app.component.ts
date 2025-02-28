import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OriSonner } from '@origin-ui/components/sonner';
import AppHeaderComponent from './components/header.component';

@Component({
    imports: [RouterModule, AppHeaderComponent, OriSonner],
    selector: 'app-root',
    template: `
        <div class="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
            <div
                class="relative mx-auto w-full max-w-6xl before:absolute before:inset-y-0 before:-left-12 before:w-px before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] after:absolute after:inset-y-0 after:-right-12 after:w-px after:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))]"
            >
                <div class="relative flex min-h-screen flex-col">
                    <app-component-header />
                    <router-outlet></router-outlet>
                </div>
            </div>
            <ori-sonner />
        </div>
    `
})
export class AppComponent {
    title = 'origin-ui';
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OriSonner } from '@origin-ui/components/sonner';
import AppHeaderComponent from './components/header.component';

@Component({
    imports: [RouterModule, AppHeaderComponent, OriSonner],
    selector: 'app-root',
    template: `
        <div class="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <app-component-header />
            <router-outlet></router-outlet>
        </div>
        <ori-sonner />
    `
})
export class AppComponent {
    title = 'origin-ui';
}

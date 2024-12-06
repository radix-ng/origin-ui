import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import AppHeaderComponent from './components/header.component';

@Component({
    standalone: true,
    imports: [RouterModule, AppHeaderComponent],
    selector: 'app-root',
    template: `
        <div class="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <app-component-header />
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    title = 'origin-ui';
}

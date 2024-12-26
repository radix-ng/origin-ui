import { Component } from '@angular/core';
import { DemoComponent } from '../../components/demo-component';
import { AppPageHeaderComponent } from '../../components/page-header.component';

@Component({
    selector: 'app-page-buttons',
    imports: [AppPageHeaderComponent, DemoComponent],
    template: `
        <main>
            <div class="px-4 sm:px-6">
                <div class="mx-auto w-full max-w-6xl">
                    <app-components-page-header title="Avatar and Badge">
                        A growing collection of {{ totalComponents }} avatar and badge components built with Angular and
                        TailwindCSS.
                    </app-components-page-header>

                    <div
                        class="[&>*]:before:bg-border/70 [&>*]:after:bg-border/70 grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
                    >
                        @defer {
                            @for (componentName of avatarFiles; track componentName) {
                                <app-demo-component
                                    [directory]="avatarDir"
                                    [componentName]="componentName"
                                    className="flex items-center justify-center"
                                ></app-demo-component>
                            }

                            @for (componentName of badgeFiles; track componentName) {
                                <app-demo-component
                                    [directory]="badgeDir"
                                    [componentName]="componentName"
                                    className="flex items-center justify-center"
                                ></app-demo-component>
                            }
                        }
                    </div>
                </div>
            </div>
        </main>
    `
})
export default class PageAvatarsComponent {
    avatarDir = 'avatars';
    avatarFiles = [
        'avatar-01',
        'avatar-02',
        'avatar-03',
        'avatar-04',
        'avatar-05',
        'avatar-06',
        'avatar-07',
        'avatar-08',
        'avatar-09'
    ];

    badgeDir = 'badges';
    badgeFiles = [
        'badge-01',
        'badge-02',
        'badge-07'
    ];

    totalComponents = this.avatarFiles.length + this.badgeFiles.length;
}

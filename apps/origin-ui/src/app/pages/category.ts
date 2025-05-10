import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { RegistryItem } from 'shadcn-ng/registry';
import { ComponentCardComponent } from '../components/component-card';
import { Cta } from '../components/cta';
import { DemoComponent } from '../components/demo-component';
import { PageGrid } from '../components/page-grid';
import { PageHeader } from '../components/page-header';
import { ComponentCategory, getCategory } from '../config/components';
import { getComponentsByNames } from '../lib/utils';

@Component({
    selector: 'app-category',
    imports: [
        PageHeader,
        PageGrid,
        ComponentCardComponent,
        DemoComponent,
        Cta
    ],
    template: `
        <main class="grow">
            <ori-page-header [title]="category().name">
                A growing collection of {{ components().length }} {{ category().name.toLocaleLowerCase() }} components
                built with Angular and Tailwind CSS.
            </ori-page-header>
            <ori-page-grid>
                @for (component of components(); track component.name) {
                    <div [component]="component" oriComponentCard>
                        @defer {
                            <app-demo-component [componentName]="component.name" [slug]="type()" />
                        }
                    </div>
                }
            </ori-page-grid>
            <app-cta />
        </main>
    `
})
export default class Category implements OnInit {
    private readonly route = inject(ActivatedRoute);

    readonly params = toSignal(this.route.params);

    readonly components = signal<RegistryItem[]>([]);

    readonly category = signal<ComponentCategory>({ components: [], name: '', slug: '' });

    readonly type = signal<string>('');

    ngOnInit() {
        const type = this.params()?.['category'];

        const getterCategory = <ComponentCategory>getCategory(type);

        if (getterCategory) {
            this.type.set(type);
            this.category.set(getterCategory);

            const components = getComponentsByNames(this.category().components.map((item: any) => item.name));
            this.components.set(components);
        }
    }
}

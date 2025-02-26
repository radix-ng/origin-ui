import { Component, computed, input, signal } from '@angular/core';

import { OriTabs, OriTabsContent, OriTabsList, OriTabsTrigger } from '~/registry/default/ui/tabs'
import { CopyButtonComponent } from './copy-button.component';

@Component({
    selector: 'cli-commands',
    imports: [OriTabs, OriTabsContent, OriTabsList, OriTabsTrigger, CopyButtonComponent],
    template: `
    <div class="relative">
        <div oriTabs class="rounded-md bg-zinc-950 dark:bg-zinc-900" [defaultValue]="selected()" (onValueChange)="setSelected($event)">
            <ori-tabs-list class="dark h-auto w-full justify-start rounded-none border-b bg-transparent px-4 py-0">
                <ori-tabs-trigger value="pnpm" class="data-[state=active]:after:bg-primary relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">pnpm</ori-tabs-trigger>
                <ori-tabs-trigger value="npm" class="data-[state=active]:after:bg-primary relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">npm</ori-tabs-trigger>
                <ori-tabs-trigger value="yarn" class="data-[state=active]:after:bg-primary relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">yarn</ori-tabs-trigger>
                <ori-tabs-trigger value="bun" class="data-[state=active]:after:bg-primary relative rounded-none py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none">bun</ori-tabs-trigger>
            </ori-tabs-list>
            @for (entry of entries(); track entry[0]) {
                <ori-tabs-content class="m-0" [value]="entry[0]">
                    <pre class="overflow-auto p-4 font-mono text-[12.8px] text-zinc-100">{{entry[1]}}</pre>
                </ori-tabs-content>
            }
        </div>
        <app-demo-copy-button className="top-1" [componentSource]="selectedCommandValue()" />
    </div>`
})
export class CliCommandsComponent {
    name = input.required<string>();

    protected readonly commands = computed(() => {
        return {
            pnpm: `pnpm dlx shadcn-ng@latest add https://www.originui-ng.com/r/${this.name()}.json`,
            npm: `npx shadcn-ng@latest add https://www.originui-ng.com/r/${this.name()}.json`,
            yarn: `npx dlx shadcn-ng@latest add https://www.originui-ng.com/r/${this.name()}.json`,
            bun: `bunx --bun shadcn-ng@latest add https://www.originui-ng.com/r/${this.name()}.json`,
        }
    })

    protected readonly entries = computed(() => {
        return Object.entries(this.commands());
    })

    protected readonly selected = signal<'pnpm' | 'npm' | 'yarn' | 'bun'>('pnpm');
    protected readonly selectedCommandValue = computed(() => {
        return this.commands()[this.selected()];
    })

    setSelected(value: string) {
        this.selected.set(value as 'pnpm' | 'npm' | 'yarn' | 'bun');
    }
}

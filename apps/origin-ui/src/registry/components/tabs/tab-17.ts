import { Component } from '@angular/core';
import { OriTabs, OriTabsContent, OriTabsList, OriTabsTrigger } from '~/registry/ui/tabs';

@Component({
    selector: 'demo-tab-17',
    imports: [OriTabs, OriTabsList, OriTabsTrigger, OriTabsContent],
    template: `
        <ori-tabs class="flex w-full gap-2" orientation="vertical" defaultValue="tab-1">
            <ori-tabs-list class="flex-col">
                <ori-tabs-trigger class="w-full" value="tab-1">Overview</ori-tabs-trigger>
                <ori-tabs-trigger class="w-full" value="tab-2">Projects</ori-tabs-trigger>
                <ori-tabs-trigger class="w-full" value="tab-3">Packages</ori-tabs-trigger>
            </ori-tabs-list>
            <div class="border-border grow rounded-lg border text-start">
                <div oriTabsContent value="tab-1">
                    <p class="text-muted-foreground px-4 py-1.5 text-xs">Content for Tab 1</p>
                </div>
                <div oriTabsContent value="tab-2">
                    <p class="text-muted-foreground px-4 py-1.5 text-xs">Content for Tab 2</p>
                </div>
                <div oriTabsContent value="tab-3">
                    <p class="text-muted-foreground px-4 py-1.5 text-xs">Content for Tab 3</p>
                </div>
            </div>
        </ori-tabs>
    `
})
export default class Tab17Component {}

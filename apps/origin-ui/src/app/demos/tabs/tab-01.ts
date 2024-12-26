import { Component } from '@angular/core';
import { OriTabs, OriTabsContent, OriTabsList, OriTabsTrigger } from '@origin-ui/components/tabs';

@Component({
    selector: 'demo-tab-01',
    imports: [OriTabs, OriTabsList, OriTabsTrigger, OriTabsContent],
    template: `
        <ori-tabs defaultValue="tab-1">
            <ori-tabs-list>
                <ori-tabs-trigger value="tab-1">Tab 1</ori-tabs-trigger>
                <ori-tabs-trigger value="tab-2">Tab 2</ori-tabs-trigger>
                <ori-tabs-trigger value="tab-3">Tab 3</ori-tabs-trigger>
            </ori-tabs-list>
            <div oriTabsContent value="tab-1">
                <p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 1</p>
            </div>
            <div oriTabsContent value="tab-2">
                <p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 2</p>
            </div>
            <div oriTabsContent value="tab-3">
                <p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 3</p>
            </div>
        </ori-tabs>
    `
})
export default class Tab01Component {}

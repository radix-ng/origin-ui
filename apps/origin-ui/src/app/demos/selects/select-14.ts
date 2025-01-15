import { Component } from '@angular/core';
import { OriLabel } from '@origin-ui/components/label';
import { OriSelectNative } from '@origin-ui/components/select-native';

@Component({
    selector: 'demo-select-14',
    imports: [OriSelectNative, OriLabel],
    template: `
        <div
            class="border-input bg-background focus-within:border-ring focus-within:ring-ring/20 relative rounded-lg border shadow-sm shadow-black/5 transition-shadow focus-within:outline-none focus-within:ring-[3px] has-[select:disabled]:cursor-not-allowed has-[select:disabled]:opacity-50 [&:has(select:is(:disabled))_*]:pointer-events-none"
        >
            <label class="text-foreground px-3 pt-2 text-xs font-medium" [htmlFor]="'select-14'" oriLabel>
                Select with inset label (native)
            </label>
            <ori-select-native
                [id]="'select-14'"
                className="border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            >
                <option value="" disabled>Select framework</option>
                <option value="s1">React</option>
                <option value="s2">Next.js</option>
                <option value="s3">Astro</option>
                <option value="s4">Gatsby</option>
            </ori-select-native>
        </div>
    `
})
export default class Select14Component {}

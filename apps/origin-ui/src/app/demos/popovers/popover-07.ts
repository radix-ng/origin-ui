import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { OriInput } from '@origin-ui/components/input';
import { OriPopoverContent } from '@origin-ui/components/popover';
import {
    RdxPopoverContentDirective,
    RdxPopoverRootDirective,
    RdxPopoverSide,
    RdxPopoverTriggerDirective
} from '@radix-ng/primitives/popover';
import { Code, Facebook, LucideAngularModule, Mail, Twitter } from 'lucide-angular';

@Component({
    selector: 'demo-popover-07',
    standalone: true,
    imports: [
        OriButton,
        OriPopoverContent,
        RdxPopoverRootDirective,
        RdxPopoverTriggerDirective,
        RdxPopoverContentDirective,
        LucideAngularModule,
        OriInput
    ],
    template: `
        <div class="flex flex-col gap-4">
            <ng-container rdxPopoverRoot>
                <ori-button variant="outline" rdxPopoverTrigger>Share</ori-button>
                <ng-template [side]="RdxPopoverSide.Bottom" [sideOffset]="4" rdxPopoverContent>
                    <ori-popover-content class="w-72">
                        <div class="flex flex-col gap-3 text-center">
                            <div class="text-sm font-medium">Share code</div>
                            <div class="flex flex-wrap justify-center gap-2">
                                <ori-button size="icon" variant="outline" aria-label="Embed">
                                    <lucide-angular [img]="CodeIcon" size="16" strokeWidth="2" />
                                </ori-button>
                                <ori-button size="icon" variant="outline" aria-label="Share on Twitter">
                                    <lucide-angular [img]="TwitterIcon" size="16" strokeWidth="2" />
                                </ori-button>
                                <ori-button size="icon" variant="outline" aria-label="Share on Facebook">
                                    <lucide-angular [img]="FacebookIcon" size="16" strokeWidth="2" />
                                </ori-button>
                                <ori-button size="icon" variant="outline" aria-label="Share via email">
                                    <lucide-angular [img]="MailIcon" size="16" strokeWidth="2" />
                                </ori-button>
                            </div>
                            <div class="space-y-2">
                                <div class="relative">
                                    <ori-input
                                        class="pe-9"
                                        id="input-53"
                                        type="text"
                                        value="https://originui-ng.com/"
                                        aria-label="Share link"
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </ori-popover-content>
                </ng-template>
            </ng-container>
        </div>
    `
})
export default class Popover07Component {
    protected readonly RdxPopoverSide = RdxPopoverSide;
    protected readonly CodeIcon = Code;
    protected readonly TwitterIcon = Twitter;
    protected readonly FacebookIcon = Facebook;
    protected readonly MailIcon = Mail;
}

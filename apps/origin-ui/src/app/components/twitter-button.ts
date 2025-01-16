import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';

@Component({
    selector: 'app-twitter-button',
    imports: [
        OriButton
    ],
    template: `
        <a
            class="text-muted-foreground hover:text-foreground rounded-full"
            oriButton
            variant="ghost"
            href="https://x.com/intent/follow?screen_name=pimenovoleg"
            target="_blank"
            size="icon"
            aria-label="Follow us on X"
        >
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="14" height="13">
                <path
                    d="M14 12.25H9.68L6.297 7.97l-3.873 4.28H.276L5.295 6.7 0 0h4.43l3.06 3.916L11.025 0h2.147L8.485 5.19 14 12.25Zm-3.727-1.244h1.189L3.783 1.18H2.507l7.766 9.827Z"
                />
            </svg>
        </a>
    `
})
export class TwitterButton {}

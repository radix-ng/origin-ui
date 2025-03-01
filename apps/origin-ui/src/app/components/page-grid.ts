import { Component } from '@angular/core';

@Component({
    selector: 'ori-page-grid',
    template: `
        <div class="overflow-hidden">
            <div
                class="-m-px grid grid-cols-12 [&>*:not(:first-child)]:-ms-px [&>*:not(:first-child)]:-mt-px [&>*]:px-1 [&>*]:py-12 sm:[&>*]:px-8 xl:[&>*]:px-12"
            >
                <ng-content />
            </div>
        </div>
    `
})
export class PageGrid {}

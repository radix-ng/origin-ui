import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { toast } from 'ngx-sonner';

@Component({
    selector: 'demo-notification-21',
    imports: [OriButton],
    template: `
        <button (click)="openSonner()" oriButton variant="outline">Show sonner</button>
    `
})
export default class Notification21Component {
    openSonner() {
        toast('Your request was completed!', {
            description: 'It was a long journey, but we made it!',
            action: {
                label: 'Undo',
                onClick: () => console.log('Undo')
            }
        });
    }
}

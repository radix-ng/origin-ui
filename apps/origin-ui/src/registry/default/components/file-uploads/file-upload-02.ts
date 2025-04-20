import { AfterViewInit, Component, computed, ElementRef, viewChild } from '@angular/core';
import { CircleUserRound, LucideAngularModule, X } from 'lucide-angular';
import { useFileUpload } from '~/registry/default/lib/use-file-upload';
import { OriButton } from '~/registry/default/ui/button';

@Component({
    selector: 'demo-file-upload-02',
    imports: [OriButton, LucideAngularModule],
    template: `
        <div class="flex flex-col items-center gap-2">
            <div class="relative inline-flex">
                <button
                    class="relative size-16 overflow-hidden p-0 shadow-none"
                    (click)="actions.openFileDialog()"
                    variant="outline"
                    oriButton
                    aria-label="Upload image"
                >
                    @if (previewUrl()) {
                        <img
                            class="size-full object-cover"
                            [src]="previewUrl()"
                            style="object-fit: cover"
                            alt="Preview of uploaded image"
                            width="64"
                            height="64"
                        />
                    } @else {
                        <div aria-hidden="true">
                            <lucide-angular class="size-4 opacity-60" [img]="CircleUserRound" />
                        </div>
                    }
                </button>

                @if (previewUrl()) {
                    <button
                        class="border-background focus-visible:border-background absolute -top-2 -right-2 size-6 rounded-full border-2 shadow-none"
                        (click)="actions.removeFile(this.state.files()[0].id)"
                        aria-label="Remove image"
                        size="icon"
                        oriButton
                    >
                        <lucide-angular class="size-3.5" [img]="X" />
                    </button>
                }
                <input
                    class="sr-only"
                    #fileInput
                    [attr.accept]="inputProps.accept"
                    [multiple]="inputProps.multiple"
                    (change)="inputProps.onChange($event)"
                    type="file"
                    aria-label="Upload image file"
                />
            </div>
            @if (fileName()) {
                <p class="text-muted-foreground text-xs">{{ fileName() }}</p>
            }
            <p class="text-muted-foreground mt-2 text-xs" aria-live="polite" role="region">Avatar upload button</p>
        </div>
    `
})
export default class FileUpload02Component implements AfterViewInit {
    readonly fileInput = viewChild<ElementRef>('fileInput');

    private readonly hookResult = useFileUpload({ accept: 'image/*' });
    readonly state = this.hookResult[0];
    readonly actions = this.hookResult[1];

    readonly inputProps = this.actions.getInputProps();

    readonly previewUrl = computed(() => this.state.files()[0]?.preview || null);
    readonly fileName = computed(() => this.state.files()[0]?.file.name || null);

    ngAfterViewInit() {
        this.actions.getInputProps().ref.set(this.fileInput()?.nativeElement as HTMLInputElement);
    }

    protected readonly CircleUserRound = CircleUserRound;
    protected readonly X = X;
}

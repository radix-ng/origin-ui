import { AfterViewInit, Component, computed, ElementRef, viewChild } from '@angular/core';
import { CircleUserRound, LucideAngularModule, X } from 'lucide-angular';
import { useFileUpload } from '~/registry/default/lib/use-file-upload';
import { OriButton } from '~/registry/default/ui/button';

@Component({
    selector: 'demo-file-upload-03',
    imports: [OriButton, LucideAngularModule],
    template: `
        <div class="flex flex-col items-center gap-2">
            <div class="relative inline-flex">
                <!-- /* Drop area */-->
                <div
                    class="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-dashed transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
                    [attr.aria-label]="previewUrl() ? 'Preview of uploaded image' : 'Default user avatar'"
                    (click)="actions.openFileDialog()"
                    (dragenter)="actions.handleDragEnter($event)"
                    (dragleave)="actions.handleDragLeave($event)"
                    (dragover)="actions.handleDragOver($event)"
                    (drop)="actions.handleDrop($event)"
                    role="button"
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
                </div>
                @if (previewUrl()) {
                    <button
                        class="border-background focus-visible:border-background absolute -top-1 -right-1 size-6 rounded-full border-2 shadow-none"
                        (click)="actions.removeFile(this.state.files()[0].id)"
                        oriButton
                        size="icon"
                        aria-label="Remove image"
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
            <p class="text-muted-foreground mt-2 text-xs" aria-live="polite" role="region">
                Avatar uploader with droppable area ∙{{ ' ' }}
                <a
                    class="hover:text-foreground underline"
                    href="https://github.com/radix-ng/origin-ui/tree/main/docs/use-file-upload.md"
                >
                    API
                </a>
            </p>
        </div>
    `
})
export default class FileUpload03Component implements AfterViewInit {
    readonly fileInput = viewChild<ElementRef>('fileInput');

    private readonly hookResult = useFileUpload({ accept: 'image/*' });
    readonly state = this.hookResult[0];
    readonly actions = this.hookResult[1];

    readonly inputProps = this.actions.getInputProps();

    readonly previewUrl = computed(() => this.state.files()[0]?.preview || null);

    ngAfterViewInit() {
        this.actions.getInputProps().ref.set(this.fileInput()?.nativeElement as HTMLInputElement);
    }

    protected readonly CircleUserRound = CircleUserRound;
    protected readonly X = X;
}

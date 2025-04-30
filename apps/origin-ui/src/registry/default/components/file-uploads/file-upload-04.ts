import { AfterViewInit, Component, computed, ElementRef, viewChild } from '@angular/core';
import { AlertCircle, ImageUp, LucideAngularModule, X } from 'lucide-angular';
import { useFileUpload } from '~/registry/default/lib/use-file-upload';

@Component({
    selector: 'demo-file-upload-04',
    imports: [LucideAngularModule],
    template: `
        <div class="flex flex-col gap-2">
            <div class="relative">
                <!-- /* Drop area */-->
                <div
                    class="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
                    [attr.data-dragging]="state.isDragging() || undefined"
                    (click)="actions.openFileDialog()"
                    (dragenter)="actions.handleDragEnter($event)"
                    (dragleave)="actions.handleDragLeave($event)"
                    (dragover)="actions.handleDragOver($event)"
                    (drop)="actions.handleDrop($event)"
                    role="button"
                >
                    <input
                        class="sr-only"
                        #fileInput
                        [attr.accept]="inputProps.accept"
                        [multiple]="inputProps.multiple"
                        (change)="inputProps.onChange($event)"
                        type="file"
                        aria-label="Upload file"
                    />
                    @if (previewUrl()) {
                        <div class="absolute inset-0">
                            <img class="size-full object-cover" [src]="previewUrl()" alt="Preview of uploaded image" />
                        </div>
                    } @else {
                        <div class="flex flex-col items-center justify-center px-4 py-3 text-center">
                            <div
                                class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                                aria-hidden="true"
                            >
                                <lucide-angular class="size-4 opacity-60" [img]="ImageUp" />
                            </div>
                            <p class="mb-1.5 text-sm font-medium">Drop your image here or click to browse</p>
                            <p class="text-muted-foreground text-xs">Max size: {{ maxSizeMB }}MB</p>
                        </div>
                    }
                </div>
                @if (previewUrl()) {
                    <div class="absolute top-4 right-4">
                        <button
                            class="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
                            (click)="actions.removeFile(this.state.files()[0].id)"
                            type="button"
                            aria-label="Remove image"
                        >
                            <lucide-angular class="size-4" [img]="X" aria-hidden="true" />
                        </button>
                    </div>
                }
            </div>
            @if (state.errors().length > 0) {
                <div class="text-destructive flex items-center gap-1 text-xs" role="alert">
                    <lucide-angular class="size-3 shrink-0" [img]="AlertCircle" />

                    <span>{{ state.errors()[0] }}</span>
                </div>
            }
            <p class="text-muted-foreground mt-2 text-xs" aria-live="polite" role="region">
                Single image uploader w/ max size ∙{{ ' ' }}
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
export default class FileUpload04Component implements AfterViewInit {
    readonly fileInput = viewChild<ElementRef>('fileInput');

    readonly maxSizeMB = 5;
    readonly maxSize = this.maxSizeMB * 1024 * 1024; // 5MB default

    private readonly hookResult = useFileUpload({ accept: 'image/*', maxSize: this.maxSize });
    readonly state = this.hookResult[0];
    readonly actions = this.hookResult[1];

    readonly inputProps = this.actions.getInputProps();

    readonly previewUrl = computed(() => this.state.files()[0]?.preview || null);

    ngAfterViewInit() {
        this.actions.getInputProps().ref.set(this.fileInput()?.nativeElement as HTMLInputElement);
    }

    protected readonly X = X;
    protected readonly ImageUp = ImageUp;
    protected readonly AlertCircle = AlertCircle;
}

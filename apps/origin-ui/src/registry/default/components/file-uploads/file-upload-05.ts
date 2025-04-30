import { AfterViewInit, Component, computed, ElementRef, viewChild } from '@angular/core';
import { AlertCircle, Image, LucideAngularModule, Upload, X } from 'lucide-angular';
import { useFileUpload } from '~/registry/default/lib/use-file-upload';
import { OriButton } from '~/registry/default/ui/button';

@Component({
    selector: 'demo-file-upload-05',
    imports: [LucideAngularModule, OriButton],
    template: `
        <div class="flex flex-col gap-2">
            <div class="relative">
                <!-- /* Drop area */-->
                <div
                    class="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-[input:focus]:ring-[3px]"
                    [attr.data-dragging]="state.isDragging() || undefined"
                    (dragenter)="actions.handleDragEnter($event)"
                    (dragleave)="actions.handleDragLeave($event)"
                    (dragover)="actions.handleDragOver($event)"
                    (drop)="actions.handleDrop($event)"
                >
                    <input
                        class="sr-only"
                        #fileInput
                        [attr.accept]="inputProps.accept"
                        [multiple]="inputProps.multiple"
                        (change)="inputProps.onChange($event)"
                        type="file"
                        aria-label="Upload image file"
                    />
                    @if (previewUrl()) {
                        <div class="absolute inset-0 flex items-center justify-center p-4">
                            <img
                                class="size-full object-cover"
                                [src]="previewUrl()"
                                [alt]="state.files()[0].file.name || 'Preview of uploaded image'"
                            />
                        </div>
                    } @else {
                        <div class="flex flex-col items-center justify-center px-4 py-3 text-center">
                            <div
                                class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                                aria-hidden="true"
                            >
                                <lucide-angular class="size-4 opacity-60" [img]="Image" />
                            </div>
                            <p class="mb-1.5 text-sm font-medium">Drop your image here</p>
                            <p class="text-muted-foreground text-xs">SVG, PNG, JPG or GIF (max. {{ maxSizeMB }}MB)</p>
                            <button
                                class="mt-4"
                                (click)="actions.openFileDialog()"
                                type="button"
                                oriButton
                                variant="outline"
                            >
                                <lucide-angular class="-ms-1 size-4 opacity-60" [img]="Upload" aria-hidden="true" />
                                Select image
                            </button>
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
            <p class="text-muted-foreground mt-2 text-center text-xs" aria-live="polite" role="region">
                Single image uploader w/ max size (drop area + button) ∙{{ ' ' }}
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
export default class FileUpload05Component implements AfterViewInit {
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
    protected readonly AlertCircle = AlertCircle;
    protected readonly Image = Image;
    protected readonly Upload = Upload;
}

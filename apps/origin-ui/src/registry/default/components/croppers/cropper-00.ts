import {
    AfterViewInit,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    OnDestroy,
    signal,
    TemplateRef,
    viewChild
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Area } from '@radix-ng/primitives/cropper';
import { RdxDialogRef, RdxDialogService } from '@radix-ng/primitives/dialog';

import { ArrowLeft, CircleUserRound, LucideAngularModule, X, ZoomIn, ZoomOut } from 'lucide-angular';
import { filter, Subject, takeUntil } from 'rxjs';
import { useFileUpload } from '~/registry/default/lib/use-file-upload';
import { OriButton } from '~/registry/default/ui/button';
import { OriCropper, OriCropperArea, OriCropperDescription, OriCropperImage } from '~/registry/default/ui/cropper';
import {
    OriDialogComponent,
    OriDialogDescription,
    OriDialogFooter,
    OriDialogHeader,
    OriDialogTitle
} from '~/registry/default/ui/dialog';
import { OriSlider } from '~/registry/default/ui/slider';

// Helper function to create a cropped image blob
const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', (error) => reject(error));
        image.setAttribute('crossOrigin', 'anonymous'); // Needed for canvas Tainted check
        image.src = url;
    });

async function getCroppedImg(
    imageSrc: string,
    pixelCrop: Area,
    outputWidth: number = pixelCrop.width, // Optional: specify output size
    outputHeight: number = pixelCrop.height
): Promise<Blob | null> {
    try {
        const image = await createImage(imageSrc);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            return null;
        }

        // Set canvas size to desired output size
        canvas.width = outputWidth;
        canvas.height = outputHeight;

        // Draw the cropped image onto the canvas
        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            outputWidth, // Draw onto the output size
            outputHeight
        );

        // Convert canvas to blob
        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                resolve(blob);
            }, 'image/jpeg'); // Specify format and quality if needed
        });
    } catch (error) {
        console.error('Error in getCroppedImg:', error);
        return null;
    }
}

@Component({
    selector: 'demo-cropper-00',
    imports: [
        LucideAngularModule,
        OriDialogComponent,
        OriDialogDescription,
        OriDialogHeader,
        OriDialogTitle,
        OriButton,
        OriCropper,
        OriCropperDescription,
        OriCropperImage,
        OriCropperArea,
        OriDialogFooter,
        OriSlider
    ],
    providers: [RdxDialogService],
    template: `
        <div class="flex flex-col items-center gap-2">
            <div class="relative inline-flex">
                <!-- Drop area - uses finalImageUrl-->
                <button
                    class="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 focus-visible:border-ring focus-visible:ring-ring/50 relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-dashed transition-colors outline-none focus-visible:ring-[3px] has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none"
                    [attr.aria-label]="finalImageUrl() ? 'Change image' : 'Upload image'"
                    [attr.data-dragging]="state.isDragging() || undefined"
                    (click)="actions.openFileDialog()"
                    (dragenter)="actions.handleDragEnter($event)"
                    (dragleave)="actions.handleDragLeave($event)"
                    (dragover)="actions.handleDragOver($event)"
                    (drop)="actions.handleDrop($event)"
                >
                    @if (finalImageUrl()) {
                        <img
                            class="size-full object-cover"
                            [src]="finalImageUrl()"
                            style="object-fit: cover"
                            alt="User avatar"
                            width="64"
                            height="64"
                        />
                    } @else {
                        <div aria-hidden="true">
                            <lucide-angular class="size-4 opacity-60" [img]="CircleUserRound" />
                        </div>
                    }
                </button>
                <!--                Remove button - depends on finalImageUrl-->
                @if (finalImageUrl()) {
                    <button
                        class="border-background focus-visible:border-background absolute -top-1 -right-1 size-6 rounded-full border-2 shadow-none"
                        (click)="handleRemoveFinalImage()"
                        oriButton
                        size="icon"
                        aria-label="Remove image"
                    >
                        <lucide-icon class="size-3.5" [img]="X" />
                    </button>
                }

                <input
                    class="sr-only"
                    #fileInput
                    [attr.accept]="inputProps.accept"
                    (change)="inputProps.onChange($event)"
                    aria-label="Upload image file"
                    type="file"
                    tabIndex="-1"
                />
            </div>

            <ng-template #dialog>
                <ori-dialog-content class="gap-0 overflow-hidden p-0 sm:max-w-140 *:[button]:hidden">
                    <ori-dialog-description class="sr-only">Crop image dialog</ori-dialog-description>
                    <ori-dialog-header class="contents space-y-0 text-left">
                        <ori-dialog-title class="flex items-center justify-between border-b p-4 text-base">
                            <div class="flex items-center gap-2">
                                <button
                                    class="-my-1 opacity-60"
                                    oriButton
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Cancel"
                                >
                                    <lucide-angular [img]="ArrowLeft" aria-hidden="true" />
                                </button>
                                <span>Crop image</span>
                            </div>
                            <button
                                class="-my-1"
                                [disabled]="!previewUrl()"
                                (click)="handleApply()"
                                oriButton
                                autoFocus
                            >
                                Apply
                            </button>
                        </ori-dialog-title>
                    </ori-dialog-header>
                    @if (previewUrl()) {
                        <ori-cropper
                            class="h-96 sm:h-120"
                            [image]="previewUrl()!"
                            [zoom]="zoom()"
                            (onCropChange)="handleCropChange($event)"
                            (onZoomChange)="zoom.set($event)"
                        >
                            <ori-cropper-description />
                            <ori-cropper-image />
                            <ori-cropper-area />
                        </ori-cropper>
                    }
                    <ori-dialog-footer class="border-t px-4 py-6">
                        <div class="mx-auto flex w-full max-w-80 items-center gap-4">
                            <lucide-icon class="shrink-0 opacity-60" [img]="ZoomOut" size="16" aria-hidden="true" />
                            <ori-slider
                                class="flex-grow"
                                [defaultValue]="[zoom()]"
                                [min]="1"
                                [max]="3"
                                [step]="0.1"
                                (onValueChange)="zoom.set($event)"
                                aria-label="Zoom slider"
                            />
                            <lucide-icon class="shrink-0 opacity-60" [img]="ZoomIn" size="16" aria-hidden="true" />
                        </div>
                    </ori-dialog-footer>
                </ori-dialog-content>
            </ng-template>

            <p class="text-muted-foreground mt-2 text-xs" aria-live="polite" role="region">
                Avatar{{ ' ' }}
                <a
                    class="hover:text-foreground underline"
                    href="https://github.com/radix-ng/origin-ui/tree/main/docs/use-file-upload.md"
                    target="_blank"
                >
                    uploader
                </a>
                {{ ' ' }} with{{ ' ' }}
                <a
                    class="hover:text-foreground underline"
                    href="https://sb-primitives.radix-ng.com/?path=/docs/primitives-cropper--docs"
                    target="_blank"
                >
                    cropper
                </a>
            </p>
        </div>
    `
})
export default class Cropper00 implements AfterViewInit, OnDestroy {
    private readonly dialogService = inject(RdxDialogService);

    readonly fileInput = viewChild<ElementRef>('fileInput');
    readonly dialog = viewChild.required<TemplateRef<any>>('dialog');

    readonly finalImageUrl = signal<string | null>(null);
    readonly isDialogOpen = signal<boolean>(false);
    readonly zoom = signal<number>(1);

    readonly croppedAreaPixels = signal<Area | null>(null);
    readonly previousFileIdRef = signal<string | null>(null);

    private readonly hookResult = useFileUpload({ accept: 'image/*' });
    readonly state = this.hookResult[0];
    readonly actions = this.hookResult[1];

    readonly previewUrl = computed(() => this.state.files()[0]?.preview);
    readonly fileId = computed(() => this.state.files()[0]?.id);

    readonly inputProps = this.actions.getInputProps();

    private readonly destroy$ = new Subject<void>();
    private refDialog: RdxDialogRef;

    constructor() {
        effect((onCleanup) => {
            const currentFinalUrl = this.finalImageUrl();

            onCleanup(() => {
                if (currentFinalUrl && currentFinalUrl.startsWith('blob:')) {
                    URL.revokeObjectURL(currentFinalUrl);
                }
            });
        });

        effect(() => {
            if (this.fileId() && this.fileId() !== this.previousFileIdRef()) {
                this.isDialogOpen.set(true);
                this.croppedAreaPixels.set(null);
                this.zoom.set(1);
            }

            this.previousFileIdRef.set(this.fileId());
        });

        toObservable(this.isDialogOpen)
            .pipe(
                filter((open) => open),
                takeUntil(this.destroy$)
            )
            .subscribe(() => {
                this.refDialog = this.dialogService.open({
                    data: {},
                    content: this.dialog()
                });
            });
    }

    ngAfterViewInit() {
        this.inputProps.ref.set(this.fileInput()?.nativeElement as HTMLInputElement);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    handleCropChange(pixels: Area | null) {
        this.croppedAreaPixels.set(pixels);
    }

    handleRemoveFinalImage() {
        if (this.finalImageUrl()) {
            URL.revokeObjectURL(this.finalImageUrl()!);
        }
        this.finalImageUrl.set(null);
    }

    async handleApply() {
        if (!this.previewUrl() || !this.fileId() || !this.croppedAreaPixels()) {
            console.error('Missing data for apply:', {
                previewUrl: this.previewUrl(),
                fileId: this.fileId(),
                croppedAreaPixels: this.croppedAreaPixels()
            });
            // Remove file if apply is clicked without crop data?
            if (this.fileId()) {
                this.actions.removeFile(this.fileId());
                this.croppedAreaPixels.set(null);
            }
            return;
        }

        try {
            // 1. Get the cropped image blob using the helper
            const croppedBlob = await getCroppedImg(this.previewUrl()!, this.croppedAreaPixels()!);

            if (!croppedBlob) {
                throw new Error('Failed to generate cropped image blob.');
            }

            // 2. Create a NEW object URL from the cropped blob
            const newFinalUrl = URL.createObjectURL(croppedBlob);

            // 3. Revoke the OLD finalImageUrl if it exists
            if (this.finalImageUrl()) {
                URL.revokeObjectURL(this.finalImageUrl()!);
            }

            // 4. Set the final avatar state to the NEW URL
            this.finalImageUrl.set(newFinalUrl);

            // 5. Close the dialog (don't remove the file yet)
            this.isDialogOpen.set(false);
            this.refDialog.close();
        } catch (error) {
            console.error('Error during apply:', error);
            // Close the dialog even if cropping fails
            this.isDialogOpen.set(false);
        }
    }

    protected readonly ArrowLeft = ArrowLeft;
    protected readonly ZoomOut = ZoomOut;
    protected readonly ZoomIn = ZoomIn;
    protected readonly CircleUserRound = CircleUserRound;
    protected readonly X = X;
}

import { Component, effect, signal } from '@angular/core';
import { Area } from '@radix-ng/primitives/cropper';
import { OriButton } from '~/registry/default/ui/button';
import { OriCropper, OriCropperArea, OriCropperDescription, OriCropperImage } from '~/registry/default/ui/cropper';

// --- Start: Copied Helper Functions ---
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
// --- End: Copied Helper Functions ---

@Component({
    selector: 'demo-cropper-10',
    imports: [
        OriCropper,
        OriCropperImage,
        OriCropperArea,
        OriCropperDescription,
        OriButton
    ],
    template: `
        <div class="flex flex-col items-center gap-2">
            <div class="flex w-full flex-col gap-4 md:flex-row">
                <ori-cropper
                    class="h-64 md:flex-1"
                    [image]="ORIGINAL_IMAGE_URL"
                    (onCropChange)="handleCropChange($event)"
                >
                    <ori-cropper-description />
                    <ori-cropper-image />
                    <ori-cropper-area />
                </ori-cropper>
                <div class="flex w-26 flex-col gap-4">
                    <button [disabled]="!croppedAreaPixels()" (click)="handleCrop()" oriButton>Crop preview</button>
                    <div class="aspect-square w-full shrink-0 overflow-hidden rounded-lg border">
                        @if (croppedImageUrl()) {
                            <img class="h-full w-full object-cover" [src]="croppedImageUrl()" alt="Cropped result" />
                        } @else {
                            <div
                                class="bg-muted text-muted-foreground/80 flex h-full w-full items-center justify-center p-2 text-center text-xs"
                            >
                                Image preview
                            </div>
                        }
                    </div>
                </div>
            </div>
            <p class="text-muted-foreground mt-2 text-xs" aria-live="polite" role="region">
                Cropper with image preview ∙{{ ' ' }}
                <a
                    class="hover:text-foreground underline"
                    href="https://sb-primitives.radix-ng.com/?path=/docs/primitives-cropper--docs"
                    target="_blank"
                >
                    API
                </a>
            </p>
        </div>
    `
})
export default class Cropper10 {
    readonly ORIGINAL_IMAGE_URL = 'https://res.cloudinary.com/dlzlfasou/image/upload/v1746526187/cropper-10_k24zxk.jpg';

    readonly croppedAreaPixels = signal<Area | null>(null);
    readonly croppedImageUrl = signal<string | null>(null);

    private cleanupEffect = effect(() => {
        const currentUrl = this.croppedImageUrl();
        return () => {
            if (currentUrl && currentUrl.startsWith('blob:')) {
                URL.revokeObjectURL(currentUrl);
                console.log('Revoked URL:', currentUrl);
            }
        };
    });
    handleCropChange(pixels: Area | null) {
        this.croppedAreaPixels.set(pixels);
    }

    async handleCrop() {
        if (!this.croppedAreaPixels()) {
            console.error('No crop area selected.');
            return;
        }

        try {
            const croppedBlob = await getCroppedImg(this.ORIGINAL_IMAGE_URL, this.croppedAreaPixels()!);
            if (!croppedBlob) {
                throw new Error('Failed to generate cropped image blob.');
            }

            // Create a new object URL
            const newCroppedUrl = URL.createObjectURL(croppedBlob);

            // Revoke the old URL if it exists
            if (this.croppedImageUrl()) {
                URL.revokeObjectURL(this.croppedImageUrl()!);
            }

            // Set the new URL
            this.croppedImageUrl.set(newCroppedUrl);
        } catch (error) {
            console.error('Error during cropping:', error);
            // Optionally: Clear the old image URL on error
            if (this.croppedImageUrl()) {
                URL.revokeObjectURL(this.croppedImageUrl()!);
            }
            this.croppedImageUrl.set(null);
        }
    }
}

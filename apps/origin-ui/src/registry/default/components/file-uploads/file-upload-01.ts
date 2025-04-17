import { AfterViewInit, Component, computed, ElementRef, viewChild } from '@angular/core';
import { CircleUserRound, LucideAngularModule } from 'lucide-angular';
import { useFileUpload } from '~/registry/default/lib/use-file-upload';
import { OriButton } from '~/registry/default/ui/button';

@Component({
    selector: 'demo-file-upload-01',
    imports: [OriButton, LucideAngularModule],
    template: `
        <div class="flex flex-col items-center gap-2">
            <div class="inline-flex items-center gap-2 align-top">
                <div
                    class="border-input relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md border"
                    [attr.aria-label]="previewUrl() ? 'Preview of uploaded image' : 'Default user avatar'"
                >
                    @if (previewUrl()) {
                        <img
                            class="size-full object-cover"
                            [src]="previewUrl()"
                            alt="Preview of uploaded image"
                            width="32"
                            height="32"
                        />
                    } @else {
                        <div aria-hidden="true">
                            <lucide-angular class="opacity-60" [img]="CircleUserRound" size="16" />
                        </div>
                    }
                </div>
                <div class="relative inline-block">
                    <button (click)="actions.openFileDialog()" oriButton aria-haspopup="dialog">Upload image</button>
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
            </div>
            @if (fileName()) {
                <div class="inline-flex gap-2 text-xs">
                    <p class="text-muted-foreground truncate" aria-live="polite">
                        {{ fileName() }}
                    </p>
                    {{ ' ' }}
                    <button
                        class="text-destructive font-medium hover:underline"
                        (click)="actions.removeFile(this.state.files()[0].id)"
                    >
                        Remove
                    </button>
                </div>
            }
            <p class="text-muted-foreground mt-2 text-xs" aria-live="polite" role="region">
                Basic image uploader ∙{{ ' ' }}
                <a
                    class="hover:text-foreground underline"
                    href="https://github.com/radix-ng/origin-ui/tree/main/docs/use-file-upload.md"
                >
                    Docs
                </a>
            </p>
        </div>
    `
})
export default class FileUpload01Component implements AfterViewInit {
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
}

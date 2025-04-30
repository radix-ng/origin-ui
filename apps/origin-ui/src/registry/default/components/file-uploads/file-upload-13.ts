import { AfterViewInit, Component, computed, ElementRef, signal, viewChild } from '@angular/core';
import {
    AlertCircle,
    FileArchive,
    File as FileIcon,
    FileSpreadsheet,
    FileText,
    Headphones,
    Image,
    LucideAngularModule,
    Trash2,
    Upload,
    Video,
    X
} from 'lucide-angular';
import { FileWithPreview, formatBytes, useFileUpload } from '~/registry/default/lib/use-file-upload';
import { OriButton } from '~/registry/default/ui/button';

type UploadProgress = {
    fileId: string;
    progress: number;
    completed: boolean;
};

const initialFiles = [
    {
        name: 'intro.zip',
        size: 252873,
        type: 'application/zip',
        url: 'https://example.com/intro.zip',
        id: 'intro.zip-1744638436563-8u5xuls'
    },
    {
        name: 'image-01.jpg',
        size: 1528737,
        type: 'image/jpeg',
        url: 'https://picsum.photos/1000/800?grayscale&random=1',
        id: 'image-01-123456789'
    },
    {
        name: 'audio.mp3',
        size: 1528737,
        type: 'audio/mpeg',
        url: 'https://example.com/audio.mp3',
        id: 'audio-123456789'
    }
];

// Function to simulate file upload with more realistic timing and progress
const simulateUpload = (totalBytes: number, onProgress: (progress: number) => void, onComplete: () => void) => {
    let timeoutId: NodeJS.Timeout;
    let uploadedBytes = 0;
    let lastProgressReport = 0;

    const simulateChunk = () => {
        // Simulate variable network conditions with random chunk sizes
        const chunkSize = Math.floor(Math.random() * 300000) + 2000;
        uploadedBytes = Math.min(totalBytes, uploadedBytes + chunkSize);

        // Calculate progress percentage (0-100)
        const progressPercent = Math.floor((uploadedBytes / totalBytes) * 100);

        // Only report progress if it's changed by at least 1%
        if (progressPercent > lastProgressReport) {
            lastProgressReport = progressPercent;
            onProgress(progressPercent);
        }

        // Continue simulation if not complete
        if (uploadedBytes < totalBytes) {
            // Variable delay between 50ms and 500ms to simulate network fluctuations (reduced for faster uploads)
            const delay = Math.floor(Math.random() * 450) + 50;

            // Occasionally add a longer pause to simulate network congestion (5% chance, shorter duration)
            const extraDelay = Math.random() < 0.05 ? 500 : 0;

            timeoutId = setTimeout(simulateChunk, delay + extraDelay);
        } else {
            // Upload complete
            onComplete();
        }
    };

    // Start the simulation
    timeoutId = setTimeout(simulateChunk, 100);

    // Return a cleanup function to cancel the simulation
    return () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };
};

@Component({
    selector: 'demo-file-upload-13',
    imports: [LucideAngularModule, OriButton],
    template: `
        <div class="flex flex-col gap-2">
            <!-- /* Drop area */-->
            <div
                class="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px]"
                [attr.data-dragging]="state.isDragging() || undefined"
                [attr.data-files]="state.files().length > 0 || undefined"
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

                @if (state.files().length > 0) {
                    <div class="flex w-full flex-col gap-3">
                        <div class="flex items-center justify-between gap-2">
                            <h3 class="truncate text-sm font-medium">Files ({{ state.files().length }})</h3>
                            <div class="flex gap-2">
                                <button (click)="actions.openFileDialog()" oriButton variant="outline" size="sm">
                                    <lucide-angular
                                        class="-ms-0.5 size-3.5 opacity-60"
                                        [img]="Upload"
                                        aria-hidden="true"
                                    />
                                    Add files
                                </button>
                                <button (click)="clearAllProgressTracking()" oriButton variant="outline" size="sm">
                                    <lucide-angular
                                        class="-ms-0.5 size-3.5 opacity-60"
                                        [img]="Trash2"
                                        aria-hidden="true"
                                    />
                                    Remove all
                                </button>
                            </div>
                        </div>

                        <div class="w-full space-y-2">
                            @for (file of state.files(); track $index) {
                                <div
                                    class="bg-background flex flex-col gap-1 rounded-lg border p-2 pe-3 transition-opacity duration-300"
                                    [attr.data-uploading]="isUploading(file) || undefined"
                                >
                                    <div class="flex items-center justify-between gap-2">
                                        <div
                                            class="flex items-center gap-3 overflow-hidden in-data-[uploading=true]:opacity-50"
                                        >
                                            <div
                                                class="flex aspect-square size-10 shrink-0 items-center justify-center rounded border"
                                            >
                                                <lucide-angular [img]="getFileIcon(file)" />
                                            </div>
                                            <div class="flex min-w-0 flex-col gap-0.5">
                                                <p class="truncate text-[13px] font-medium">
                                                    {{ getFileName(file) }}
                                                </p>
                                                <p class="text-muted-foreground text-xs">
                                                    {{ getFileBytes(file) }}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            class="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
                                            (click)="handleFileRemoved(file)"
                                            oriButton
                                            size="icon"
                                            variant="ghost"
                                            aria-label="Remove file"
                                        >
                                            <lucide-angular class="size-4" [img]="X" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <!--Upload progress bar-->
                                    @if (fileProgress(file); as fileProgress) {
                                        @if (!fileProgress.completed) {
                                            <div class="mt-1 flex items-center gap-2">
                                                <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                                                    <div
                                                        class="bg-primary h-full transition-all duration-300 ease-out"
                                                        [style.width.%]="fileProgress.progress || 0"
                                                    >
                                                        />
                                                    </div>
                                                    <span class="text-muted-foreground w-10 text-xs tabular-nums">
                                                        {{ fileProgress.progress }}%
                                                    </span>
                                                </div>
                                            </div>
                                        }
                                    }
                                </div>
                            }
                        </div>
                    </div>
                } @else {
                    <div class="flex flex-col items-center justify-center px-4 py-3 text-center">
                        <div
                            class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
                            aria-hidden="true"
                        >
                            <lucide-angular class="size-4 opacity-60" [img]="Image" />
                        </div>
                        <p class="mb-1.5 text-sm font-medium">Drop your files here</p>
                        <p class="text-muted-foreground text-xs">Max {{ maxFiles }} files ∙ Up to {{ maxSizeMB }}MB</p>
                        <button class="mt-4" (click)="actions.openFileDialog()" oriButton variant="outline">
                            <lucide-angular class="-ms-1 opacity-60" [img]="Upload" aria-hidden="true" />
                            Select images
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
                With simulated progress track ∙{{ ' ' }}
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
export default class FileUpload13Component implements AfterViewInit {
    readonly fileInput = viewChild<ElementRef>('fileInput');

    readonly maxFiles = 6;
    readonly maxSizeMB = 5;
    readonly maxSize = this.maxSizeMB * 1024 * 1024; // 5MB default

    handleFilesAdded = (addedFiles: FileWithPreview[]) => {
        // Initialize progress tracking for each new file
        const newProgressItems = addedFiles.map((file) => ({
            fileId: file.id,
            progress: 0,
            completed: false
        }));

        this.uploadProgress.update((prev) => [
            ...prev,
            ...newProgressItems
        ]);

        // Store cleanup functions
        const cleanupFunctions: Array<() => void> = [];

        // Start simulated upload for each file
        addedFiles.forEach((file) => {
            const fileSize = file.file instanceof File ? file.file.size : file.file.size;

            // Start the upload simulation and store the cleanup function
            const cleanup = simulateUpload(
                fileSize,
                // Progress callback
                (progress) => {
                    this.uploadProgress.update((prev) =>
                        prev.map((item) => (item.fileId === file.id ? { ...item, progress } : item))
                    );
                },
                // Complete callback
                () => {
                    this.uploadProgress.update((prev) =>
                        prev.map((item) => (item.fileId === file.id ? { ...item, completed: true } : item))
                    );
                }
            );

            cleanupFunctions.push(cleanup);
        });

        // Return a cleanup function that cancels all animations
        return () => {
            cleanupFunctions.forEach((cleanup) => cleanup());
        };
    };

    private readonly hookResult = useFileUpload({
        multiple: true,
        accept: 'image/*',
        maxFiles: this.maxFiles,
        maxSize: this.maxSize,
        initialFiles,
        onFilesAdded: this.handleFilesAdded
    });

    readonly state = this.hookResult[0];
    readonly actions = this.hookResult[1];

    readonly inputProps = this.actions.getInputProps();

    readonly previewUrl = computed(() => this.state.files()[0]?.preview || null);

    readonly uploadProgress = signal<UploadProgress[]>([]);

    ngAfterViewInit() {
        this.actions.getInputProps().ref.set(this.fileInput()?.nativeElement as HTMLInputElement);
    }

    fileProgress(file: FileWithPreview) {
        return this.uploadProgress().find((p) => p.fileId === file.id);
    }

    isUploading(file: FileWithPreview) {
        // Find the upload progress for this file once to avoid repeated lookups
        const fileProgress = this.uploadProgress().find((p) => p.fileId === file.id);
        return fileProgress && !fileProgress.completed;
    }

    private iconMap = [
        {
            icon: FileText,
            test: (type: string, name: string) =>
                type.includes('pdf') ||
                name.endsWith('.pdf') ||
                type.includes('word') ||
                name.match(/\.(docx?|DOCX?)$/) != null
        },
        {
            icon: FileArchive,
            test: (type: string, name: string) =>
                type.includes('zip') || type.includes('archive') || name.match(/\.(zip|rar)$/i) != null
        },
        {
            icon: FileSpreadsheet,
            test: (type: string, name: string) => type.includes('excel') || name.match(/\.xlsx?$/i) != null
        },
        {
            icon: Video,
            test: (type: string) => type.startsWith('video/')
        },
        {
            icon: Headphones,
            test: (type: string) => type.startsWith('audio/')
        },
        {
            icon: Image,
            test: (type: string) => type.startsWith('image/')
        }
    ];

    getFileIcon(fileWrapper: { file: File | { type: string; name: string } }) {
        const { type, name } =
            fileWrapper.file instanceof File
                ? { type: fileWrapper.file.type, name: fileWrapper.file.name }
                : fileWrapper.file;

        const found = this.iconMap.find((m) => m.test(type, name));
        return found ? found.icon : this.FileIcon;
    }

    getFileName(file: any) {
        return file.file instanceof File ? file.file.name : file.file.name;
    }

    getFileBytes(file: any) {
        return formatBytes(file.file instanceof File ? file.file.size : file.file.size);
    }

    clearAllProgressTracking() {
        this.uploadProgress.set([]);
        this.actions.clearFiles();
    }

    handleFileRemoved(file: any) {
        this.fileRemoved(file.id);
        this.actions.removeFile(this.state.files()[0].id);
    }

    fileRemoved(fileId: string) {
        this.uploadProgress.update((prev) => prev.filter((item) => item.fileId !== fileId));
    }

    protected readonly FileIcon = FileIcon;
    protected readonly X = X;
    protected readonly AlertCircle = AlertCircle;
    protected readonly Image = Image;
    protected readonly Upload = Upload;
    protected readonly Trash2 = Trash2;
}

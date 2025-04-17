import { signal, WritableSignal } from '@angular/core';

export interface FileMetadata {
    name: string;
    size: number;
    type: string;
    url: string;
    id: string;
}

export interface FileWithPreview {
    file: File | FileMetadata;
    id: string;
    preview?: string;
}

export interface FileUploadOptions {
    maxFiles?: number;
    maxSize?: number;
    accept?: string;
    multiple?: boolean;
    initialFiles?: FileMetadata[];
    onFilesChange?: (files: FileWithPreview[]) => void;
    onFilesAdded?: (addedFiles: FileWithPreview[]) => void;
}

export interface FileUploadState {
    files: WritableSignal<FileWithPreview[]>;
    isDragging: WritableSignal<boolean>;
    errors: WritableSignal<string[]>;
}

export interface FileUploadActions {
    addFiles: (files: FileList | File[]) => void;
    removeFile: (id: string) => void;
    clearFiles: () => void;
    clearErrors: () => void;
    handleDragEnter: (e: DragEvent) => void;
    handleDragLeave: (e: DragEvent) => void;
    handleDragOver: (e: DragEvent) => void;
    handleDrop: (e: DragEvent) => void;
    handleFileChange: (e: Event) => void;
    openFileDialog: () => void;
    getInputProps: () => {
        accept: string;
        multiple: boolean;
        onChange: (e: Event) => void;
        ref: WritableSignal<HTMLInputElement | null>;
    };
}

export function useFileUpload(options: FileUploadOptions = {}): [FileUploadState, FileUploadActions] {
    const {
        maxFiles = Infinity,
        maxSize = Infinity,
        accept = '*',
        multiple = false,
        initialFiles = [],
        onFilesChange,
        onFilesAdded
    } = options;

    const files = signal<FileWithPreview[]>(initialFiles.map((f) => ({ file: f, id: f.id, preview: f.url })));

    const isDragging = signal(false);
    const errors = signal<string[]>([]);
    const inputRef = signal<HTMLInputElement | null>(null);

    const validateFile = (file: File | FileMetadata): string | null => {
        const size = file instanceof File ? file.size : file.size;
        const name = file instanceof File ? file.name : file.name;
        const type = file instanceof File ? file.type : file.type;

        if (size > maxSize) {
            return `File "${name}" exceeds max size of ${formatBytes(maxSize)}`;
        }
        if (accept !== '*') {
            const patterns = accept.split(',').map((t) => t.trim());
            const ext = '.' + name.split('.').pop();
            const ok = patterns.some((p) =>
                p.startsWith('.')
                    ? ext.toLowerCase() === p.toLowerCase()
                    : p.endsWith('/*')
                      ? type.startsWith(p.replace('/*', '/'))
                      : type === p
            );
            if (!ok) {
                return `File "${name}" is not an accepted type."`;
            }
        }
        return null;
    };

    const createPreview = (file: File | FileMetadata): string | undefined =>
        file instanceof File ? URL.createObjectURL(file) : file.url;

    const generateUniqueId = (file: File | FileMetadata): string =>
        file instanceof File ? `${file.name}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}` : file.id;

    const clearFiles = () => {
        files().forEach((f) => {
            if (f.preview && f.file instanceof File && f.file.type.startsWith('image/')) {
                URL.revokeObjectURL(f.preview);
            }
        });
        files.set([]);
        errors.set([]);
        onFilesChange?.([]);
    };

    const addFiles = (newFiles: FileList | File[]) => {
        const arr = Array.from(newFiles || []);
        if (!arr.length) return;
        if (!multiple) clearFiles();
        if (multiple && files().length + arr.length > maxFiles) {
            errors.set([`Max ${maxFiles} files allowed.`]);
            return;
        }
        const errs: string[] = [];
        const valids: FileWithPreview[] = [];
        arr.forEach((file) => {
            const err = validateFile(file);
            if (err) {
                errs.push(err);
                return;
            }
            valids.push({ file, id: generateUniqueId(file), preview: createPreview(file) });
        });
        if (valids.length) {
            onFilesAdded?.(valids);
            const updated = multiple ? [...files(), ...valids] : valids;
            files.set(updated);
            onFilesChange?.(updated);
        }
        errors.set(errs);
    };

    const removeFile = (id: string) => {
        const remaining = files().filter((f) => f.id !== id);
        files.set(remaining);
        errors.set([]);
        onFilesChange?.(remaining);
    };

    const clearErrors = () => errors.set([]);

    const handleDragEnter = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isDragging.set(true);
    };
    const handleDragLeave = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isDragging.set(false);
    };
    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleDrop = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        isDragging.set(false);
        if (e.dataTransfer?.files.length) {
            if (multiple) {
                addFiles(e.dataTransfer.files);
            } else {
                addFiles([e.dataTransfer.files[0]]);
            }
        }
    };

    const handleFileChange = (e: Event) => {
        const input = e.target as HTMLInputElement;
        if (input.files?.length) {
            if (multiple) {
                addFiles(input.files);
            } else {
                addFiles([input.files[0]]);
            }
            input.value = '';
        }
    };

    const openFileDialog = () => inputRef()?.click();

    const getInputProps = () => ({ accept, multiple, onChange: handleFileChange, ref: inputRef });

    return [
        { files, isDragging, errors },
        {
            addFiles,
            removeFile,
            clearFiles,
            clearErrors,
            handleDragEnter,
            handleDragLeave,
            handleDragOver,
            handleDrop,
            handleFileChange,
            openFileDialog,
            getInputProps
        }
    ];
}

// Helper function to format bytes to human-readable format
export const formatBytes = (bytes: number, decimals = 2): string => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
};

# useFileUpload Hook

A flexible, feature-rich Angular “hook” (standalone function) for handling file uploads with drag‑and‑drop support, file validation, and preview generation, built on the new Signal API.

> **Note:** This function provides a solid foundation for file uploads in Angular but is designed to be extended. You can implement additional features like pause/resume, chunked uploads, retry mechanisms, or integration with specific backend services.

Features

- 📁 Single or multiple file uploads
- 🖱️ Drag & drop support
- 🔍 File type validation (accept patterns)
- 📏 File size validation (maxSize)
- 🖼️ Image preview generation
- 🧹 Duplicate file detection
- ⚠️ Error handling
- 🎛️ Fully customizable callbacks

## Basic Usage

```html
import { Component } from '@angular/core';
import { useFileUpload, FileWithPreview } from '../hooks/use-file-upload';

@Component({
  selector: 'uploader',
  template: `
    <div
      class="drop-zone"
      [class.dragging]="state.isDragging()"
      (dragenter)="actions.handleDragEnter($event)"
      (dragleave)="actions.handleDragLeave($event)"
      (dragover)="actions.handleDragOver($event)"
      (drop)="actions.handleDrop($event)"
    >
      Drag and drop files here or
      <button type="button" (click)="actions.openFileDialog()">
        Select {{ multiple ? 'Files' : 'File' }}
      </button>
    </div>

    <input
      type="file"
      [attr.accept]="inputProps.accept"
      [multiple]="inputProps.multiple"
      (change)="inputProps.onChange($event)"
      [ref]="inputProps.ref"
      hidden
    />

    <div *ngIf="state.errors().length > 0" class="errors">
      <p *ngFor="let err of state.errors()">{{ err }}</p>
    </div>

    <ul class="file-list">
      <li *ngFor="let f of state.files()">
        {{ (f.file instanceof File ? f.file.name : f.file.name) }}
        <button type="button" (click)="actions.removeFile(f.id)">
          Remove
        </button>
      </li>
    </ul>
  `,
})
export class UploaderComponent {
  readonly [state, actions] = useFileUpload({
    accept: 'image/*',
    multiple: true,
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024, // 5 MB
    onFilesChange: files => console.log('All files:', files),
    onFilesAdded: added => console.log('Newly added:', added)
  });

  readonly inputProps = actions.getInputProps();

  get files()    { return state.files(); }
  get isDragging() { return state.isDragging(); }
  get errors()   { return state.errors(); }
  get multiple() { return actions.getInputProps().multiple; }
}

```

## API Reference

### Hook Parameters

The useFileUpload function accepts an options object:

| Option | Type | Default    | Description |
|--------|------|------------|-------------|
| `maxFiles` | `number` | `Infinity` | Maximum number of files allowed (only used when `multiple` is `true`) |
| `maxSize` | `number` | `Infinity` | Maximum file size in bytes |
| `accept` | `string` | `"*"`      | Comma‑separated MIME types or extensions (e.g. '.png,image/*') |
| `multiple` | `boolean` | `false`    | Allow multiple file selection |
| `initialFiles` | `FileMetadata[]` | `[]`       | Prepopulate uploader with existing files |
| `onFilesChange` | `(files: FileWithPreview[]) => void` | `-`        | Callback when all files array changes |
| `onFilesAdded` | `(addedFiles: FileWithPreview[]) => void` | `-`        | Callback when new files are added |

### Return Value

The hook returns a tuple with two elements:

#### State Object

| Property | Type | Description                                        |
|----------|------|----------------------------------------------------|
| `files` | `Signal<FileWithPreview[]>` | Reactive array of files with previews                   |
| `isDragging` | `Signal<boolean>` | `true` when a drag operation is over the drop zone |
| `errors` | `Signal<string[]>` | Array of validation or upload error messages       |

#### Actions Object

| Method | Type | Description |
|--------|------|-------------|
| `addFiles` | `(files: FileList \| File[]) => void` | Add files programmatically |
| `removeFile` | `(id: string) => void` | Remove a file by its ID |
| `clearFiles` | `() => void` | Remove all files |
| `clearErrors` | `() => void` | Clear all error messages |
| `handleDragEnter` | `(e: DragEvent<HTMLElement>) => void` | Handle drag enter event |
| `handleDragLeave` | `(e: DragEvent<HTMLElement>) => void` | Handle drag leave event |
| `handleDragOver` | `(e: DragEvent<HTMLElement>) => void` | Handle drag over event |
| `handleDrop` | `(e: DragEvent<HTMLElement>) => void` | Handle drop event |
| `handleFileChange` | `(e: ChangeEvent<HTMLInputElement>) => void` | Handle file input change event |
| `openFileDialog` | `() => void` | Open the file selection dialog |
| `getInputProps` | `() => { accept: string; multiple: boolean; onChange: (e: Event) => void; ref: WritableSignal<HTMLInputElement | null> }` | Get props for the file input element |


## Helper Functions

### formatBytes

Formats a byte value into a human-readable string.

```ts
function formatBytes(bytes: number, decimals = 2): string
```

Example:
```ts
formatBytes(1024) // "1 KB"
formatBytes(1536, 1) // "1.5 KB"
```

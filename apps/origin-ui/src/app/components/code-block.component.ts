import { Component, effect, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { type BundledLanguage, codeToHtml } from 'shiki';

@Component({
    selector: 'app-code-block',
    template: `
        <div
            class="[&_code]:font-mono [&_code]:text-[13px] [&_pre]:max-h-[450px] [&_pre]:overflow-auto [&_pre]:rounded-lg [&_pre]:!bg-zinc-950 [&_pre]:p-4 [&_pre]:leading-snug dark:[&_pre]:!bg-zinc-900"
            [innerHTML]="code()"
        ></div>
    `
})
export class CodeBlockComponent {
    private readonly sanitizer = inject(DomSanitizer);

    readonly sourceCode = input<string>('');

    readonly lang = input<BundledLanguage>('typescript');

    protected readonly code = signal<SafeHtml>('');

    #codeChanges = effect(() => {
        codeToHtml(this.sourceCode(), { theme: 'github-dark', lang: this.lang() }).then((highlightedCode: string) => {
            this.code.set(this.sanitizer.bypassSecurityTrustHtml(highlightedCode));
        });
    });
}

import {Component, inject, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {HttpClient, } from '@angular/common/http';

@Component({
  selector: 'app-demo-component',
  standalone: true,
  imports: [],
  template: `
    <div [class]="computedClass">
      <ng-container #container></ng-container>
    </div>
  `
})
export class DemoComponent implements OnInit {
  @Input() directory!: string;
  @Input() componentName!: string;
  @Input() className: string = '';

  private readonly http = inject(HttpClient);

  @ViewChild('container', { read: ViewContainerRef, static: true })
  private container!: ViewContainerRef;

  computedClass: string = '';

  async ngOnInit() {
    this.computedClass = `group/item relative ${this.className}`;

    const { default: ComponentModule } = await import(`../demos/${this.directory}/${this.componentName}.ts`);

    if (!ComponentModule) {
      console.error('Component not found:', this.componentName);
      return;
    }

    this.container.createComponent(ComponentModule);
  }
}

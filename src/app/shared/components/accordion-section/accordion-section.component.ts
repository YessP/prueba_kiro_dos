import {
  Component,
  Input,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bch-accordion-section',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bch-accordion" [class.bch-accordion--expanded]="expanded()">
      <button
        type="button"
        class="bch-accordion__header"
        [attr.aria-expanded]="expanded()"
        [attr.aria-controls]="panelId"
        (click)="toggle()"
        (keydown.enter)="toggle()"
        (keydown.space)="$event.preventDefault(); toggle()"
      >
        <span class="bch-accordion__title bch-h4">{{ title }}</span>
        <span
          class="bch-accordion__icon material-icons"
          aria-hidden="true"
          [class.bch-accordion__icon--rotated]="expanded()"
        >
          expand_more
        </span>
      </button>

      <div
        [id]="panelId"
        role="region"
        [attr.aria-labelledby]="headerId"
        class="bch-accordion__panel"
        [class.bch-accordion__panel--visible]="expanded()"
      >
        <div class="bch-accordion__content">
          <ng-content />
        </div>
      </div>
    </div>
  `,
  styles: [`
    .bch-accordion {
      border: 1px solid var(--bch-gray-lighter);
      border-radius: 8px;
      background: var(--bch-white);
      overflow: hidden;
    }

    .bch-accordion__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 16px 24px;
      background: transparent;
      border: none;
      cursor: pointer;
      text-align: left;
      color: var(--bch-gray-dark);
      transition: background-color 0.15s ease;
    }

    .bch-accordion__header:hover {
      background: var(--bch-gray-background);
    }

    .bch-accordion__header:focus-visible {
      outline: 2px solid var(--bch-primary-base);
      outline-offset: -2px;
    }

    .bch-accordion__title {
      flex: 1;
    }

    .bch-accordion__icon {
      color: var(--bch-gray-base);
      transition: transform 0.25s ease;
      font-size: 20px;
      flex-shrink: 0;
    }

    .bch-accordion__icon--rotated {
      transform: rotate(180deg);
    }

    .bch-accordion__panel {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .bch-accordion__panel--visible {
      max-height: 2000px;
    }

    .bch-accordion__content {
      padding: 0 24px 24px;
    }
  `],
})
export class AccordionSectionComponent {
  @Input({ required: true }) title!: string;
  @Input() initiallyExpanded = true;

  readonly expanded = signal(true);

  readonly panelId = `accordion-panel-${Math.random().toString(36).slice(2)}`;
  readonly headerId = `accordion-header-${Math.random().toString(36).slice(2)}`;

  ngOnInit(): void {
    this.expanded.set(this.initiallyExpanded);
  }

  toggle(): void {
    this.expanded.update(v => !v);
  }
}

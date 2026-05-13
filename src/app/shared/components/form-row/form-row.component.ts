import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bch-form-row',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bch-form-row" [ngClass]="'bch-form-row--cols-' + cols">
      <ng-content />
    </div>
  `,
  styles: [`
    .bch-form-row {
      display: grid;
      gap: 16px;
      width: 100%;
    }

    .bch-form-row--cols-1 { grid-template-columns: 1fr; }
    .bch-form-row--cols-2 { grid-template-columns: repeat(2, 1fr); }
    .bch-form-row--cols-3 { grid-template-columns: repeat(3, 1fr); }

    @media (max-width: 1024px) {
      .bch-form-row--cols-3 { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 768px) {
      .bch-form-row--cols-2,
      .bch-form-row--cols-3 { grid-template-columns: 1fr; }
    }
  `],
})
export class FormRowComponent {
  @Input() cols: 1 | 2 | 3 = 2;
}

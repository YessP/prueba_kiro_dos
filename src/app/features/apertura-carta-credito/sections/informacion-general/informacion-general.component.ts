import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AccordionSectionComponent } from '../../../../shared/components/accordion-section/accordion-section.component';
import { FormRowComponent } from '../../../../shared/components/form-row/form-row.component';
import { SelectOption } from '../../models/apertura-carta-credito.interface';

@Component({
  selector: 'bch-informacion-general',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AccordionSectionComponent, FormRowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bch-accordion-section title="Información General" [initiallyExpanded]="true">
      <form [formGroup]="form" novalidate>
        <bch-form-row [cols]="2">
          <!-- Oficina Ejecutiva -->
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="oficinaEjecutiva">
              Oficina Ejecutiva
            </label>
            <select
              id="oficinaEjecutiva"
              class="bch-select"
              formControlName="oficinaEjecutiva"
              [class.bch-select--error]="isInvalid('oficinaEjecutiva')"
              aria-required="true"
            >
              <option value="" disabled>Seleccione una opción</option>
              <option *ngFor="let opt of oficinasEjecutivas" [value]="opt.value">
                {{ opt.label }}
              </option>
            </select>
            <span
              *ngIf="isInvalid('oficinaEjecutiva')"
              class="bch-field__error bch-body-small"
              role="alert"
            >
              Este campo es requerido
            </span>
          </div>

          <!-- Oficina -->
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="oficina">
              Oficina
            </label>
            <select
              id="oficina"
              class="bch-select"
              formControlName="oficina"
              [class.bch-select--error]="isInvalid('oficina')"
              aria-required="true"
            >
              <option value="" disabled>Seleccione una opción</option>
              <option *ngFor="let opt of oficinas" [value]="opt.value">
                {{ opt.label }}
              </option>
            </select>
            <span
              *ngIf="isInvalid('oficina')"
              class="bch-field__error bch-body-small"
              role="alert"
            >
              Este campo es requerido
            </span>
          </div>
        </bch-form-row>
      </form>
    </bch-accordion-section>
  `,
  styles: [`
    :host { display: block; }
  `],
})
export class InformacionGeneralComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input() oficinasEjecutivas: SelectOption[] = [];
  @Input() oficinas: SelectOption[] = [];

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}

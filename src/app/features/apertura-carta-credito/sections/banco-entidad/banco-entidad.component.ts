import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AccordionSectionComponent } from '../../../../shared/components/accordion-section/accordion-section.component';
import { FormRowComponent } from '../../../../shared/components/form-row/form-row.component';

/**
 * Reusable accordion section for bank entity fields.
 * Used by: Banco Financiador, Banco Corresponsal Vista,
 *          Banco Corresponsal Plazo, Banco Notificador.
 */
@Component({
  selector: 'bch-banco-entidad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AccordionSectionComponent, FormRowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bch-accordion-section [title]="title" [initiallyExpanded]="initiallyExpanded">
      <form [formGroup]="form" novalidate>
        <bch-form-row [cols]="2">
          <!-- Banco Identificador -->
          <div class="bch-field">
            <label class="bch-field__label bch-label" [for]="fieldPrefix + 'BancoId'">
              Banco Identificador
            </label>
            <input
              [id]="fieldPrefix + 'BancoId'"
              type="text"
              class="bch-input"
              formControlName="bancoIdentificador"
              [class.bch-input--error]="isInvalid('bancoIdentificador')"
              placeholder="Ingrese identificador del banco"
            />
            <span
              *ngIf="isInvalid('bancoIdentificador')"
              class="bch-field__error bch-body-small"
              role="alert"
            >
              Este campo es requerido
            </span>
          </div>

          <!-- Dirección -->
          <div class="bch-field">
            <label class="bch-field__label bch-label" [for]="fieldPrefix + 'Direccion'">
              Dirección
            </label>
            <input
              [id]="fieldPrefix + 'Direccion'"
              type="text"
              class="bch-input"
              formControlName="direccion"
              placeholder="Ingrese dirección"
            />
          </div>
        </bch-form-row>

        <!-- Selection Type -->
        <div class="bch-field bch-field--mt" role="group" [attr.aria-labelledby]="fieldPrefix + 'TipoLabel'">
          <span [id]="fieldPrefix + 'TipoLabel'" class="bch-field__label bch-label">
            Tipo de Selección
          </span>
          <div class="bch-radio-group">
            <label class="bch-radio-option">
              <input
                type="radio"
                class="bch-radio"
                formControlName="tipoSeleccion"
                value="base-participantes"
              />
              <span class="bch-radio-option__label bch-body">Base de Participantes</span>
            </label>
            <label class="bch-radio-option">
              <input
                type="radio"
                class="bch-radio"
                formControlName="tipoSeleccion"
                value="en-especial"
              />
              <span class="bch-radio-option__label bch-body">En especial</span>
            </label>
          </div>
        </div>
      </form>
    </bch-accordion-section>
  `,
  styles: [`
    :host { display: block; }
    .bch-field--mt { margin-top: 16px; }
  `],
})
export class BancoEntidadComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) form!: FormGroup;
  @Input() fieldPrefix = 'banco';
  @Input() initiallyExpanded = true;

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}

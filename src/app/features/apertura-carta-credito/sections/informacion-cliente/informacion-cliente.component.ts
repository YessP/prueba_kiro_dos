import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AccordionSectionComponent } from '../../../../shared/components/accordion-section/accordion-section.component';
import { FormRowComponent } from '../../../../shared/components/form-row/form-row.component';

@Component({
  selector: 'bch-informacion-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AccordionSectionComponent, FormRowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bch-accordion-section title="Información Cliente" [initiallyExpanded]="true">
      <form [formGroup]="form" novalidate>
        <bch-form-row [cols]="2">
          <!-- Ordenante / Tomador -->
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="ordenanteTomador">
              Ordenante / Tomador
            </label>
            <input
              id="ordenanteTomador"
              type="text"
              class="bch-input"
              formControlName="ordenanteTomador"
              [class.bch-input--error]="isInvalid('ordenanteTomador')"
              placeholder="Ingrese nombre o razón social"
              aria-required="true"
            />
            <span
              *ngIf="isInvalid('ordenanteTomador')"
              class="bch-field__error bch-body-small"
              role="alert"
            >
              Este campo es requerido
            </span>
          </div>

          <!-- Dirección -->
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="clienteDireccion">
              Dirección
            </label>
            <input
              id="clienteDireccion"
              type="text"
              class="bch-input"
              formControlName="direccion"
              [class.bch-input--error]="isInvalid('direccion')"
              placeholder="Ingrese dirección"
              aria-required="true"
            />
            <span
              *ngIf="isInvalid('direccion')"
              class="bch-field__error bch-body-small"
              role="alert"
            >
              Este campo es requerido
            </span>
          </div>
        </bch-form-row>

        <!-- Radio Group: Tipo de Participante -->
        <div class="bch-field bch-field--mt" role="group" aria-labelledby="tipoParticipanteLabel">
          <span id="tipoParticipanteLabel" class="bch-field__label bch-label">
            Tipo de Participante
          </span>
          <div class="bch-radio-group">
            <label class="bch-radio-option">
              <input
                type="radio"
                class="bch-radio"
                formControlName="tipoParticipante"
                value="base-participantes"
              />
              <span class="bch-radio-option__label bch-body">Base de Participantes</span>
            </label>
            <label class="bch-radio-option">
              <input
                type="radio"
                class="bch-radio"
                formControlName="tipoParticipante"
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
export class InformacionClienteComponent {
  @Input({ required: true }) form!: FormGroup;

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}

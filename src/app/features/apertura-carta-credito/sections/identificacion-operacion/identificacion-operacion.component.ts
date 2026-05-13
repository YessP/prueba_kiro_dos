import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AccordionSectionComponent } from '../../../../shared/components/accordion-section/accordion-section.component';
import { FormRowComponent } from '../../../../shared/components/form-row/form-row.component';

@Component({
  selector: 'bch-identificacion-operacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AccordionSectionComponent, FormRowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bch-accordion-section title="Identificación de la Operación" [initiallyExpanded]="true">
      <form [formGroup]="form" novalidate>

        <!-- Row 1: Importador + Referencia -->
        <bch-form-row [cols]="2">
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="importador">Importador</label>
            <input
              id="importador"
              type="text"
              class="bch-input"
              formControlName="importador"
              [class.bch-input--error]="isInvalid('importador')"
              placeholder="Ingrese importador"
              aria-required="true"
            />
            <span *ngIf="isInvalid('importador')" class="bch-field__error bch-body-small" role="alert">
              Este campo es requerido
            </span>
          </div>

          <div class="bch-field">
            <label class="bch-field__label bch-label" for="referencia">Referencia</label>
            <input
              id="referencia"
              type="text"
              class="bch-input"
              formControlName="referencia"
              placeholder="Ingrese referencia"
            />
          </div>
        </bch-form-row>

        <!-- Row 2: Importación -->
        <bch-form-row [cols]="1" class="bch-form-row--mt">
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="importacion">Importación</label>
            <input
              id="importacion"
              type="text"
              class="bch-input"
              formControlName="importacion"
              placeholder="Ingrese importación"
            />
          </div>
        </bch-form-row>

        <!-- Row 3: Banco Receptor + Referencia Receptor -->
        <bch-form-row [cols]="2" class="bch-form-row--mt">
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="bancoReceptor">Banco Receptor</label>
            <input
              id="bancoReceptor"
              type="text"
              class="bch-input"
              formControlName="bancoReceptor"
              placeholder="Ingrese banco receptor"
            />
          </div>

          <div class="bch-field">
            <label class="bch-field__label bch-label" for="referenciaReceptor">Referencia</label>
            <input
              id="referenciaReceptor"
              type="text"
              class="bch-input"
              formControlName="referenciaReceptor"
              placeholder="Ingrese referencia"
            />
          </div>
        </bch-form-row>

      </form>
    </bch-accordion-section>
  `,
  styles: [`
    :host { display: block; }
    .bch-form-row--mt { margin-top: 16px; }
  `],
})
export class IdentificacionOperacionComponent {
  @Input({ required: true }) form!: FormGroup;

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}

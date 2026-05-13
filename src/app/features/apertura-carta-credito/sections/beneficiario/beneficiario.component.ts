import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AccordionSectionComponent } from '../../../../shared/components/accordion-section/accordion-section.component';
import { FormRowComponent } from '../../../../shared/components/form-row/form-row.component';
import { SelectOption } from '../../models/apertura-carta-credito.interface';

@Component({
  selector: 'bch-beneficiario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AccordionSectionComponent, FormRowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bch-accordion-section title="Beneficiario" [initiallyExpanded]="true">
      <form [formGroup]="form" novalidate>

        <!-- Row 1: ID + Nombre/Razón Social -->
        <bch-form-row [cols]="2">
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="beneficiarioId">ID</label>
            <input
              id="beneficiarioId"
              type="text"
              class="bch-input"
              formControlName="id"
              [class.bch-input--error]="isInvalid('id')"
              placeholder="Ingrese ID"
              aria-required="true"
            />
            <span *ngIf="isInvalid('id')" class="bch-field__error bch-body-small" role="alert">
              Este campo es requerido
            </span>
          </div>

          <div class="bch-field">
            <label class="bch-field__label bch-label" for="nombreRazonSocial">
              Nombre / Razón Social
            </label>
            <input
              id="nombreRazonSocial"
              type="text"
              class="bch-input"
              formControlName="nombreRazonSocial"
              [class.bch-input--error]="isInvalid('nombreRazonSocial')"
              placeholder="Ingrese nombre o razón social"
              aria-required="true"
            />
            <span *ngIf="isInvalid('nombreRazonSocial')" class="bch-field__error bch-body-small" role="alert">
              Este campo es requerido
            </span>
          </div>
        </bch-form-row>

        <!-- Row 2: Dirección -->
        <bch-form-row [cols]="1" class="bch-form-row--mt">
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="beneficiarioDireccion">Dirección</label>
            <input
              id="beneficiarioDireccion"
              type="text"
              class="bch-input"
              formControlName="direccion"
              [class.bch-input--error]="isInvalid('direccion')"
              placeholder="Ingrese dirección"
            />
          </div>
        </bch-form-row>

        <!-- Row 3: Comuna/Ciudad + Región/Estado + País -->
        <bch-form-row [cols]="3" class="bch-form-row--mt">
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="comunaCiudad">
              Comuna / Ciudad
            </label>
            <input
              id="comunaCiudad"
              type="text"
              class="bch-input"
              formControlName="comunaCiudad"
              placeholder="Ingrese comuna o ciudad"
            />
          </div>

          <div class="bch-field">
            <label class="bch-field__label bch-label" for="regionEstado">
              Región / Estado
            </label>
            <input
              id="regionEstado"
              type="text"
              class="bch-input"
              formControlName="regionEstado"
              placeholder="Ingrese región o estado"
            />
          </div>

          <div class="bch-field">
            <label class="bch-field__label bch-label" for="beneficiarioPais">País</label>
            <select
              id="beneficiarioPais"
              class="bch-select"
              formControlName="pais"
            >
              <option value="" disabled>Seleccione un país</option>
              <option *ngFor="let opt of paises" [value]="opt.value">
                {{ opt.label }}
              </option>
            </select>
          </div>
        </bch-form-row>

        <!-- Row 4: Código Postal + Teléfono + Fax -->
        <bch-form-row [cols]="3" class="bch-form-row--mt">
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="codigoPostal">
              Código Postal
            </label>
            <input
              id="codigoPostal"
              type="text"
              class="bch-input"
              formControlName="codigoPostal"
              placeholder="Ingrese código postal"
            />
          </div>

          <div class="bch-field">
            <label class="bch-field__label bch-label" for="telefono">Teléfono</label>
            <input
              id="telefono"
              type="tel"
              class="bch-input"
              formControlName="telefono"
              placeholder="Ingrese teléfono"
            />
          </div>

          <div class="bch-field">
            <label class="bch-field__label bch-label" for="fax">Fax</label>
            <input
              id="fax"
              type="text"
              class="bch-input"
              formControlName="fax"
              placeholder="Ingrese fax"
            />
          </div>
        </bch-form-row>

        <!-- Row 5: Casilla Banco Privé + Casilla Postal -->
        <bch-form-row [cols]="2" class="bch-form-row--mt">
          <div class="bch-field">
            <label class="bch-field__label bch-label" for="casillaBancoPrive">
              Casilla Banco Privé
            </label>
            <input
              id="casillaBancoPrive"
              type="text"
              class="bch-input"
              formControlName="casillaBancoPrive"
              placeholder="Ingrese casilla"
            />
          </div>

          <div class="bch-field">
            <label class="bch-field__label bch-label" for="casillaPostal">
              Casilla Postal
            </label>
            <input
              id="casillaPostal"
              type="text"
              class="bch-input"
              formControlName="casillaPostal"
              placeholder="Ingrese casilla postal"
            />
          </div>
        </bch-form-row>

        <!-- Selection Type -->
        <div class="bch-field bch-field--mt" role="group" aria-labelledby="beneficiarioTipoLabel">
          <span id="beneficiarioTipoLabel" class="bch-field__label bch-label">
            Tipo de Selección
          </span>
          <div class="bch-radio-group">
            <label class="bch-radio-option">
              <input type="radio" class="bch-radio" formControlName="tipoSeleccion" value="direccion" />
              <span class="bch-radio-option__label bch-body">Dirección</span>
            </label>
            <label class="bch-radio-option">
              <input type="radio" class="bch-radio" formControlName="tipoSeleccion" value="casilla-banco-chile" />
              <span class="bch-radio-option__label bch-body">Casilla Banco de Chile</span>
            </label>
            <label class="bch-radio-option">
              <input type="radio" class="bch-radio" formControlName="tipoSeleccion" value="fax" />
              <span class="bch-radio-option__label bch-body">Fax</span>
            </label>
            <label class="bch-radio-option">
              <input type="radio" class="bch-radio" formControlName="tipoSeleccion" value="casilla-postal" />
              <span class="bch-radio-option__label bch-body">Casilla Postal</span>
            </label>
          </div>
        </div>

      </form>
    </bch-accordion-section>
  `,
  styles: [`
    :host { display: block; }
    .bch-form-row--mt { margin-top: 16px; }
    .bch-field--mt { margin-top: 16px; }
  `],
})
export class BeneficiarioComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input() paises: SelectOption[] = [];

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}

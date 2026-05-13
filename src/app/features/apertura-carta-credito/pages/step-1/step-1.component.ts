import {
  Component,
  OnInit,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AperturaCartaCreditoService } from '../../services/apertura-carta-credito.service';
import { InformacionGeneralComponent } from '../../sections/informacion-general/informacion-general.component';
import { InformacionClienteComponent } from '../../sections/informacion-cliente/informacion-cliente.component';
import { BeneficiarioComponent } from '../../sections/beneficiario/beneficiario.component';
import { BancoEntidadComponent } from '../../sections/banco-entidad/banco-entidad.component';
import { IdentificacionOperacionComponent } from '../../sections/identificacion-operacion/identificacion-operacion.component';

@Component({
  selector: 'bch-apertura-carta-credito-step1',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InformacionGeneralComponent,
    InformacionClienteComponent,
    BeneficiarioComponent,
    BancoEntidadComponent,
    IdentificacionOperacionComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.scss'],
})
export class Step1Component implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  readonly service = inject(AperturaCartaCreditoService);

  form!: FormGroup;

  readonly oficinasEjecutivas = this.service.oficinasEjecutivas;
  readonly oficinas = this.service.oficinas;
  readonly paises = this.service.paises;

  ngOnInit(): void {
    this.form = this.fb.group({
      informacionGeneral: this.fb.group({
        oficinaEjecutiva: ['', Validators.required],
        oficina: ['', Validators.required],
      }),
      informacionCliente: this.fb.group({
        ordenanteTomador: ['', Validators.required],
        direccion: ['', Validators.required],
        tipoParticipante: ['base-participantes', Validators.required],
      }),
      beneficiario: this.fb.group({
        id: ['', Validators.required],
        nombreRazonSocial: ['', Validators.required],
        direccion: [''],
        comunaCiudad: [''],
        regionEstado: [''],
        pais: [''],
        codigoPostal: [''],
        telefono: [''],
        fax: [''],
        casillaBancoPrive: [''],
        casillaPostal: [''],
        tipoSeleccion: ['direccion'],
      }),
      bancoFinanciador: this.fb.group({
        bancoIdentificador: [''],
        direccion: [''],
        tipoSeleccion: ['base-participantes'],
      }),
      bancoCorresponsalVista: this.fb.group({
        bancoIdentificador: [''],
        direccion: [''],
        tipoSeleccion: ['base-participantes'],
      }),
      bancoCorresponsalPlazo: this.fb.group({
        bancoIdentificador: [''],
        direccion: [''],
        tipoSeleccion: ['base-participantes'],
      }),
      bancoNotificador: this.fb.group({
        bancoIdentificador: [''],
        direccion: [''],
        tipoSeleccion: ['base-participantes'],
      }),
      identificacionOperacion: this.fb.group({
        importador: ['', Validators.required],
        referencia: [''],
        importacion: [''],
        bancoReceptor: [''],
        referenciaReceptor: [''],
      }),
    });
  }

  getGroup(name: string): FormGroup {
    return this.form.get(name) as FormGroup;
  }

  onGuardarBorrador(): void {
    this.service.saveDraft(this.form.value);
  }

  onSiguiente(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.service.saveDraft(this.form.value);
    this.router.navigate(['/apertura-carta-credito/step-2']);
  }
}

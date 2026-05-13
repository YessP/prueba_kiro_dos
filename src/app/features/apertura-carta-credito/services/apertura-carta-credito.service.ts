import { Injectable, signal } from '@angular/core';
import { AperturaCartaCreditoStep1, SelectOption } from '../models/apertura-carta-credito.interface';

@Injectable({ providedIn: 'root' })
export class AperturaCartaCreditoService {
  readonly draftData = signal<Partial<AperturaCartaCreditoStep1>>({});

  readonly oficinasEjecutivas = signal<SelectOption[]>([
    { value: 'oe-001', label: 'Oficina Ejecutiva Santiago Centro' },
    { value: 'oe-002', label: 'Oficina Ejecutiva Providencia' },
    { value: 'oe-003', label: 'Oficina Ejecutiva Las Condes' },
  ]);

  readonly oficinas = signal<SelectOption[]>([
    { value: 'of-001', label: 'Oficina Principal' },
    { value: 'of-002', label: 'Oficina Sucursal Norte' },
    { value: 'of-003', label: 'Oficina Sucursal Sur' },
  ]);

  readonly paises = signal<SelectOption[]>([
    { value: 'CL', label: 'Chile' },
    { value: 'AR', label: 'Argentina' },
    { value: 'BR', label: 'Brasil' },
    { value: 'US', label: 'Estados Unidos' },
    { value: 'DE', label: 'Alemania' },
  ]);

  saveDraft(data: Partial<AperturaCartaCreditoStep1>): void {
    this.draftData.set({ ...this.draftData(), ...data });
  }
}

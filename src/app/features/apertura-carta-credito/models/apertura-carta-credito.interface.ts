export interface InformacionGeneral {
  oficinaEjecutiva: string | null;
  oficina: string | null;
}

export interface InformacionCliente {
  ordenanteTomador: string;
  direccion: string;
  tipoParticipante: 'base-participantes' | 'en-especial';
}

export interface Beneficiario {
  id: string;
  nombreRazonSocial: string;
  direccion: string;
  comunaCiudad: string;
  regionEstado: string;
  pais: string;
  codigoPostal: string;
  telefono: string;
  fax: string;
  casillaBancoPrive: string;
  casillaPostal: string;
  tipoSeleccion: 'direccion' | 'casilla-banco-chile' | 'fax' | 'casilla-postal';
}

export interface BancoEntidad {
  bancoIdentificador: string;
  direccion: string;
  tipoSeleccion: 'base-participantes' | 'en-especial';
}

export interface IdentificacionOperacion {
  importador: string;
  referencia: string;
  importacion: string;
  bancoReceptor: string;
  referenciaReceptor: string;
}

export interface AperturaCartaCreditoStep1 {
  informacionGeneral: InformacionGeneral;
  informacionCliente: InformacionCliente;
  beneficiario: Beneficiario;
  bancoFinanciador: BancoEntidad;
  bancoCorresponsalVista: BancoEntidad;
  bancoCorresponsalPlazo: BancoEntidad;
  bancoNotificador: BancoEntidad;
  identificacionOperacion: IdentificacionOperacion;
}

export interface SelectOption {
  value: string;
  label: string;
}

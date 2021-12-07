import {Model, model, property} from '@loopback/repository';

@model()
export class PeajeAuto extends Model {
  @property({
    type: 'string',
  })
  PlacaAuto?: string;

  @property({
    type: 'string',
  })
  TipoAuto?: string;

  @property({
    type: 'number',
  })
  MontoPagar?: number;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;


  constructor(data?: Partial<PeajeAuto>) {
    super(data);
  }
}

export interface PeajeAutoRelations {
  // describe navigational properties here
}

export type PeajeAutoWithRelations = PeajeAuto & PeajeAutoRelations;

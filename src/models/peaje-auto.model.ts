import {Entity, model, property} from '@loopback/repository';

@model()
export class PeajeAuto extends Entity {
  @property({
    type: 'string',
  })
  placaAuto?: string;

  @property({
    type: 'string',
  })
  tipoAuto?: string;

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

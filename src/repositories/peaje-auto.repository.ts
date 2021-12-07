import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PeajeDataSource} from '../datasources';
import {PeajeAuto, PeajeAutoRelations} from '../models';

export class PeajeAutoRepository extends DefaultCrudRepository<
  PeajeAuto,
  typeof PeajeAuto.prototype._id,
  PeajeAutoRelations
> {
  constructor(
    @inject('datasources.Peaje') dataSource: PeajeDataSource,
  ) {
    super(PeajeAuto, dataSource);
  }
}

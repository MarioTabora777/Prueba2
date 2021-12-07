import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Peaje',
  connector: 'mongodb',
  url: 'mongodb+srv://Mtadeo77:holahola123@cluster0.0yry4.mongodb.net/peajes',
  host: 'cluster0.0yry4.mongodb.net',
  port: 27017,
  user: 'Mtadeo77',
  password: 'holahola123',
  database: 'peajes',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PeajeDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Peaje';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Peaje', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

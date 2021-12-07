import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {PeajeAuto} from '../models';
import {PeajeAutoRepository} from '../repositories';

export class PeajeAutoController {
  constructor(
    @repository(PeajeAutoRepository)
    public peajeAutoRepository : PeajeAutoRepository,
  ) {}

  @post('/peaje-autos')
  @response(200, {
    description: 'PeajeAuto model instance',
    content: {'application/json': {schema: getModelSchemaRef(PeajeAuto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PeajeAuto, {
            title: 'NewPeajeAuto',
            exclude: ['_id'],
          }),
        },
      },
    })
    peajeAuto: Omit<PeajeAuto, '_id'>,
  ): Promise<PeajeAuto> {
    return this.peajeAutoRepository.create(peajeAuto);
  }

  @get('/peaje-autos/count')
  @response(200, {
    description: 'PeajeAuto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PeajeAuto) where?: Where<PeajeAuto>,
  ): Promise<Count> {
    return this.peajeAutoRepository.count(where);
  }

  @get('/peaje-autos')
  @response(200, {
    description: 'Array of PeajeAuto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PeajeAuto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PeajeAuto) filter?: Filter<PeajeAuto>,
  ): Promise<PeajeAuto[]> {
    return this.peajeAutoRepository.find(filter);
  }

  @patch('/peaje-autos')
  @response(200, {
    description: 'PeajeAuto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PeajeAuto, {partial: true}),
        },
      },
    })
    peajeAuto: PeajeAuto,
    @param.where(PeajeAuto) where?: Where<PeajeAuto>,
  ): Promise<Count> {
    return this.peajeAutoRepository.updateAll(peajeAuto, where);
  }

  @get('/peaje-autos/{id}')
  @response(200, {
    description: 'PeajeAuto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PeajeAuto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PeajeAuto, {exclude: 'where'}) filter?: FilterExcludingWhere<PeajeAuto>
  ): Promise<PeajeAuto> {
    return this.peajeAutoRepository.findById(id, filter);
  }

  @patch('/peaje-autos/{id}')
  @response(204, {
    description: 'PeajeAuto PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PeajeAuto, {partial: true}),
        },
      },
    })
    peajeAuto: PeajeAuto,
  ): Promise<void> {
    await this.peajeAutoRepository.updateById(id, peajeAuto);
  }

  @put('/peaje-autos/{id}')
  @response(204, {
    description: 'PeajeAuto PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() peajeAuto: PeajeAuto,
  ): Promise<void> {
    await this.peajeAutoRepository.replaceById(id, peajeAuto);
  }

  @del('/peaje-autos/{id}')
  @response(204, {
    description: 'PeajeAuto DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.peajeAutoRepository.deleteById(id);
  }
}

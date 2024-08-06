import {HttpContext} from "@adonisjs/core/http";
import Client from "#models/client";
import {createClientValidator, updateClientValidator} from "#validators/clients_validator";
import db from "@adonisjs/lucid/services/db";

export default class ClientsController {
  async store({request}: HttpContext) : Promise<Client> {
    const payload = await  request.validateUsing(createClientValidator)
    const client = new Client()

    await db.transaction(async (trx) => {
      client.name = payload.name
      client.cpf = payload.cpf
      client.useTransaction(trx)
      await client.save()

      await client.related('address').create(payload.address)
      await client.related('phone').create({phoneNumber: payload.phone})
    })

    return client
  }

  async index(): Promise<Client[]> {
    return  Client
      .query()
      .preload('address', (query) => {
        query.select('street', 'number', 'city', 'state', 'zipcode')
      })
      .preload('phone', (query) => {
        query.select('phoneNumber')
      })
      .from('clients')
      .select('id', 'name', 'cpf')
      .orderBy('id', 'asc');
  }

  async show({ request, params }: HttpContext): Promise<Client> {
    const id = params.id;
    const querry = request.only(['month', 'year'])
    return Client
      .query()
      .where('id', id)
      .preload('address', (query) => {
        query.select('street', 'number', 'city', 'state', 'zipcode')
      })
      .preload('phone', (query) => {
        query.select('phoneNumber')
      })
      .preload('sales', (qry) => {
        qry.orderBy('date_time', 'asc')

        if (querry.month && querry.year) {
          qry.whereRaw('MONTH(date_time) = ?', [querry.month])
          qry.whereRaw('YEAR(date_time) = ?', [querry.year])
        }
      })
      .firstOrFail()
  }

  async update({params, request}: HttpContext): Promise<Client> {
    const id: number = params.id;
    const payload = await request.validateUsing(updateClientValidator)
    const client = await Client.findOrFail(id)

    await client.merge(payload).save()

    return client
  }

  async delete({params}: HttpContext): Promise<void> {
    const id: number = params.id;
    await Client
      .query()
      .where('id', id)
      .delete()
  }
}

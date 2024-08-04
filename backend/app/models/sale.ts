import {BaseModel, belongsTo, column} from "@adonisjs/lucid/orm";
import {DateTime} from "luxon";
import Client from "#models/client";
import type {BelongsTo} from "@adonisjs/lucid/types/relations";
import Product from "#models/product";

export default class Sale extends BaseModel{
  @belongsTo(() => Client)
  declare client: BelongsTo<typeof Client>;

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>;

  @column({isPrimary: true})
  declare id: number;

  @column()
  declare clientId: number;

  @column()
  declare productId: number;

  @column()
  declare quantity: number;

  @column()
  declare unitPrice: number;

  @column()
  declare totalPrice: number;

  @column()
  declare dateTime: DateTime;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

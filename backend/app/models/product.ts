import {BaseModel, column, hasMany} from "@adonisjs/lucid/orm";
import {DateTime} from "luxon";
import Sale from "#models/sale";
import type {HasMany} from "@adonisjs/lucid/types/relations";

export default class Product extends BaseModel{
  @hasMany(() => Sale)
  declare sales: HasMany<typeof Sale>

  @column({isPrimary: true})
  declare id: number;

  @column()
  declare name: string;

  @column()
  declare price: number;
  // Price is setted in cents

  @column()
  declare description: string;

  @column()
  declare manufacturingDate: Date;

  @column()
  declare expirationDate?: Date;

  @column.dateTime({ serializeAs: null })
  declare deletedAt?: DateTime;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

import { DateTime } from 'luxon'
import {BaseModel, column, hasMany, hasOne} from '@adonisjs/lucid/orm'
import Address from "#models/address";
import type {HasMany, HasOne} from "@adonisjs/lucid/types/relations";
import Phone from "#models/phone";
import Sale from "#models/sale";

export default class Client extends BaseModel {
  @hasOne(() => Address)
  declare address: HasOne<typeof Address>

  @hasOne(() => Phone)
  declare phone: HasOne<typeof Phone>

  @hasMany(() => Sale)
  declare sales: HasMany<typeof Sale>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare cpf: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

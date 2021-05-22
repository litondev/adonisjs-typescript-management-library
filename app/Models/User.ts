import { DateTime } from 'luxon'
import { BaseModel, column , beforeSave } from '@ioc:Adonis/Lucid/Orm'
import argon2 = require('phc-argon2');

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public role: string

  @column()
  public photo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  guest_books(){
  	return this.hasMany('App/Models/GuestBook')
  }

  @beforeSave()
  public static async hashPassword(user: User){
    user.password = await argon2.hash(user.password)
  }
}

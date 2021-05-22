import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import GuestBook from 'App/Models/GuestBook'

export default class GuestBookSeeder extends BaseSeeder {
  public async run () {
  	await GuestBook.create({
  		user_id : 1,
  	})
  }
}

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Book from 'App/Models/Book'

export default class BookSeeder extends BaseSeeder {
  public async run () {
    await Book.create({
    	name : 'book',
    })
  }
}

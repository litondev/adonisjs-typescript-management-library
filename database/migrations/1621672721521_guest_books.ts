import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GuestBooks extends BaseSchema {
  protected tableName = 'guest_books'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').notNullable().unsigned()       
      table.text('description').nullable()
      table.timestamps()
      table.foreign('user_id').references('id').inTable('users')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

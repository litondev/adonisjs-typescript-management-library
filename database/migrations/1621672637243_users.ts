import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unsigned()
      table.string('username',50).notNullable().index()
      table.string('email',50).notNullable().unique()
      table.text('password').notNullable()
      table.enum('role',['admin','user']).default('user')
      table.string('photo',50).default('user.png')      
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

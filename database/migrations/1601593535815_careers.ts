import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Careers extends BaseSchema {
  protected tableName = 'careers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email').index().notNullable()
      table.string('description', 1024).notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

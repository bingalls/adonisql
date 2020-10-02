import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Career from 'App/Models/Career'

export default class CareerSeeder extends BaseSeeder {
  public async run () {
    await Career.createMany([
      {
        email: 'careers@r.us',
        description: 'Senior NodeJS developer in Bermuda',
      },
      {
        email: 'jobs@for.us',
        description: 'Remote Svelte coder experienced in lite code',
      },
    ])
  }
}

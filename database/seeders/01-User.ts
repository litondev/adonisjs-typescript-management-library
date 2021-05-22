import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    for(let i=0;i<10;i++){
  		await User.create({
  			'username' : 'username'+i,
  			'email' : 'user'+i+'@gmail.com',
  			'password' : '12345678'
  		})
  	}
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IsLogin {
  public async handle ({auth,response}: HttpContextContract, next: () => Promise<void>) {
 	if(!await auth.check()){
    	response.redirect('/');
    }
    await next()
  }
}

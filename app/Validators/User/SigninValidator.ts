import { schema, rules} from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SigninValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
  	email : schema.string({ trim: true ,required : true},[
    	rules.email(),
    ]),
    password : schema.string({ trim : true, required : true},[
    	rules.minLength(8)
    ])
  })

  public messages = {
   	required: '{{ field }} harus diisi',
   	email: 'Email tidak valid',
    'password.minLength': 'Password harus lebih dari 8 digit'
  }
}

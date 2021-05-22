import { schema, rules} from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignupValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    username : schema.string({trim : true,required : true},[
      rules.unique({table : 'users',column : 'username'})
    ])
  	email : schema.string({ trim: true ,required : true},[
    	rules.email(),
      rules.unique({table : 'users',column : 'email'})
    ]),
    password : schema.string({ trim : true, required : true},[
    	rules.minLength(8)
    ])
  })

  public messages = {
   	required: '{{ field }} harus diisi',
    unique: 'Masukan {{ field }} telah terpakai',
   	email: 'Email tidak valid',
    'password.minLength': 'Password harus lebih dari 8 digit'
  }
}

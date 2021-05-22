import SigninValidator from 'App/Validators/User/SigninValidator'
import SignupValidator from 'App/Validators/User/SignupValidator'
import Helper from 'App/Helper/Helper'
import User from 'App/Models/User'

export default class AuthController {
	public async signin({auth,request,response,session}){	
		try{
			const { 
				email , 
				password 
			} = await request.validate(SigninValidator)

			await auth.use('web').attempt(email,password)		
			
			return response.redirect('/user')
		}catch(err){
			Helper.appException({
				session : session,
				response : response,
				err : err
			})
		}
	}

	public async signup({auth,request,response,session}){
		try{
		    let payload = await request.validate(SignupValidator)

			await User.create(payload)

			return response.redirect('/signin')
		}catch(err){
			Helper.appException({
				session : session,
				response : response,
				err : err
			})
			
			return response.redirect('back')
		}
	}

	public async logout({auth,response}){
		await auth.use('web').logout()
			.then(() => {
				return response.redirect('/')
			})
	}
}

export default class AuthController {
	public async signin({view}){
		return view.render('user.signin')
	}
	
	public async signup({view}){
		return view.render('user.signup')
	}
}

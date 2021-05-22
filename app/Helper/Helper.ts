class Helper{
	appException(ctx){
		const { session , err , response, redirect} = ctx;
		
		console.log(err)

		session.flash('fallback',{
			status : 'error',			
			message : err.constructor.name == "ValidationException" 
			 ? err.messages.errors[0].message 
			 : (err.constructor.name == "InvalidCredentialsException" 
				? "Email atau Password harus salah"
				: "Terjadi Kesalahan")
		})
		
		return response.redirect(redirect || 'back')
	}
}

export default new Helper()
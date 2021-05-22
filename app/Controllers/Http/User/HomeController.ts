export default class HomeController {
	public async index({auth}){
		const user = await auth.user
		console.log(user.id)
		return 'Index'
	}
}

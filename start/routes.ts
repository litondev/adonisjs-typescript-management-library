/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
	Route.get('/','User/AuthController.signin').as('guest')
	Route.get('/signin','User/AuthController.signin').as('signin')
	Route.get('/signup','User/AuthController.signup').as('signup')
	Route.post('/signin','User/Actions/AuthController.signin').as('actions.signin')
	Route.post('/signup','User/Actions/AuthController.signup').as('actions.signup')
}).middleware('isNotLogin')

Route.group(() => {
	Route.get('/','User/HomeController.index').as('user')
	Route.get('/logout','User/Actions/AuthController.logout').as('user.logout')
}).middleware('isLogin').prefix('user')
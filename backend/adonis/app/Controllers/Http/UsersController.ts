import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import user from 'App/Models/User'


export default class UsersController {
    public async index({response}: HttpContextContract) {
        const users = await user.all();

        console.log(users)
        response.json({list: users})
    }

    public async store({}: HttpContextContract) {
    }

    public async show({}: HttpContextContract) {
    }

    public async update({}: HttpContextContract) {
    }

    public async destroy({}: HttpContextContract) {
    }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import tasks from 'App/Models/Task'

export default class TasksController {
  public async index({response}: HttpContextContract) {
      const all = await tasks.all();

      response.json({success: true, tasks: all})
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

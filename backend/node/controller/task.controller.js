import defaultController from './default.controller.js'

const entity = {
    table: 'Tasks'
}

class TaskController extends defaultController {
    getById() {
        console.log('call from task controller')
        super.getById();
    }
}

export const taskController = (request, response) => new TaskController(request, response, entity);
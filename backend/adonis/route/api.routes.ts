import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('users', 'UsersController').apiOnly();
  Route.resource('tasks', 'TasksController').apiOnly();
}).prefix('/api');

//Catch the rest
Route.get('/*', async ({response}) => {
  return response.status(404).json({ status: 404, error: 'Not Found' })
})

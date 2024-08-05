/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from "#controllers/users_controller";
import ClientsController from "#controllers/clients_controller";
import {middleware} from "#start/kernel";

router.post('/signup', [UsersController, 'signup'])
router.post('/login', [UsersController, 'login'])

router.group(() => {
  router.post('/', [ClientsController, 'store'])
  router.get('/', [ClientsController, 'index'])
  router.put('/:id', [ClientsController, 'update']).where('id', router.matchers.number())
})
  .prefix('/client')
  .use(middleware.auth({ guards: ['api']} ))

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

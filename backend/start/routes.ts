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
import ProductsController from "#controllers/products_controller";
import SalesController from "#controllers/sales_controller";

router.post('/signup', [UsersController, 'signup'])
router.post('/login', [UsersController, 'login'])

router.group(() => {
  router.post('/', [ClientsController, 'store'])
  router.get('/', [ClientsController, 'index'])
  router.put('/:id', [ClientsController, 'update']).where('id', router.matchers.number())
})
  .prefix('/client')
  .use(middleware.auth({ guards: ['api']} ))

router.group(() => {
  router.post('/', [ProductsController, 'store'])
  router.get('/', [ProductsController, 'index'])
  router.put('/:id', [ProductsController, 'update']).where('id', router.matchers.number())
  router.delete('/:id', [ProductsController, 'delete']).where('id', router.matchers.number())
})
  .prefix('product')
  .use(middleware.auth({ guards: ['api']} ))

router.post('/sale', [SalesController, 'store']).use(middleware.auth({ guards: ['api'] }))

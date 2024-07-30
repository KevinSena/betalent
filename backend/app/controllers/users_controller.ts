import {HttpContext} from '@adonisjs/core/http'
import {createUserValidator, loginValidator} from "#validators/users_validator";
import User from "#models/user";
import {AccessToken} from "@adonisjs/auth/access_tokens";
import {UserNotFoundException, UnauthorizedException} from "#exceptions/http_exceptions";
import hash from "@adonisjs/core/services/hash";

export default class UsersController {
  async signup({ request }: HttpContext): Promise<AccessToken> {
    const payload = await request.validateUsing(createUserValidator)
    const user = await User.create(payload)
    return User.accessTokens.create(user)
  }

  async login({request }: HttpContext): Promise<AccessToken | void> {
    const payload = await request.validateUsing(loginValidator)
    const user = await User.findBy({ email: payload.email })
    if (!user) {
      throw new UserNotFoundException('User with email ' + payload.email + ' does not exist')
    }

    if (!await hash.verify(user.password, payload.password)) {
      throw new UnauthorizedException('Invalid Password')
    }
    return User.accessTokens.create(user)
  }
}

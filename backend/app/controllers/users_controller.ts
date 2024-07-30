import type { HttpContext } from '@adonisjs/core/http'
import {createUserValidator} from "#validators/users_validator";
import User from "#models/user";
import {AccessToken} from "@adonisjs/auth/access_tokens";

export default class UsersController {
  async signup(ctx: HttpContext): Promise<AccessToken> {
    const payload = await ctx.request.validateUsing(createUserValidator)
    const user = await User.create(payload)
    return User.accessTokens.create(user)
  }
}

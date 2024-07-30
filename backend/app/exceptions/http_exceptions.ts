import {Exception} from '@adonisjs/core/exceptions'

export class UserNotFoundException extends Exception {
  static status = 404
  static code = 'E_USER_NOT_FOUND'
}
export class UnauthorizedException extends Exception {
  static status = 401
  static code = 'E_UNAUTHORIZED'
}

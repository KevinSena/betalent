import vine from "@vinejs/vine";

export const createClientValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(100).minLength(2).alpha({allowSpaces: true}),
    cpf: vine.string().trim().fixedLength(11).alphaNumeric().regex(/^\d+$/),
    address: vine.object({
      street: vine.string().trim().maxLength(100),
      number: vine.number().positive(),
      city: vine.string().trim().maxLength(100),
      state: vine.string().trim().fixedLength(2),
      zipcode: vine.string().trim().fixedLength(8),
    }),
    phone: vine.string().trim().fixedLength(11),
  })
)

export const updateClientValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(100).minLength(2).alpha({allowSpaces: true}),
    address: vine.object({
      street: vine.string().trim().maxLength(100),
      number: vine.number().positive(),
      city: vine.string().trim().maxLength(100),
      state: vine.string().trim().fixedLength(2),
      zipcode: vine.string().trim().fixedLength(8),
    }),
    phone: vine.string().trim().fixedLength(11),
  })
)

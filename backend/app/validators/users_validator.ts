import vine from "@vinejs/vine";

export const createUserValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(3).maxLength(255).alpha({ allowSpaces: true }),
    email: vine.string().trim().maxLength(254).email(),
    password: vine.string().trim().minLength(8).maxLength(255),
  })
)

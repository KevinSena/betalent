import vine from "@vinejs/vine";

export const createProductValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(255),
    description: vine.string().trim().maxLength(255),
    price: vine.number().positive().withoutDecimals(),
    manufacturingDate: vine.date({formats: {utc: true}}),
    expirationDate: vine.date({formats: {utc: true}}).optional(),
  })
)

export const updateProductValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(255).optional(),
    description: vine.string().trim().maxLength(255).optional(),
    price: vine.number().positive().withoutDecimals().optional(),
    manufacturingDate: vine.date({formats: {utc: true}}).optional(),
    expirationDate: vine.date({formats: {utc: true}}).optional(),
  })
)

import vine from "@vinejs/vine";

export const createSaleValidator = vine.compile(
  vine.object({
    clientId: vine.number().positive().withoutDecimals(),
    productId: vine.number().positive().withoutDecimals(),
    quantity: vine.number().positive().withoutDecimals(),
  })
)

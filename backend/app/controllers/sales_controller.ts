import {HttpContext} from "@adonisjs/core/http";
import Sale from "#models/sale";
import {createSaleValidator} from "#validators/sale_validator";
import Product from "#models/product";

export default class SalesController {
  async store({ request }: HttpContext): Promise<Sale> {
    const payload = await request.validateUsing(createSaleValidator)
    const product = await Product.findOrFail(payload.productId);

    const newPayload = {
      clientId: payload.clientId,
      productId: payload.productId,
      quantity: payload.quantity,
      unitPrice: product.price,
      totalPrice: product.price * payload.quantity,
      dateTime: new Date(),
    };

    return Sale.create(newPayload)
  }
}

import {HttpContext} from "@adonisjs/core/http";
import Product from "#models/product";
import {createProductValidator, updateProductValidator} from "#validators/products_validator";
import {DateTime} from "luxon";

export default class ProductsController{
  async store({ request }: HttpContext): Promise<Product> {
    const payload = await request.validateUsing(createProductValidator)
    return Product.create(payload)
  }

  async index(): Promise<Product[]> {
    return Product
      .query()
      .from('products')
      .select('id', 'name', 'price', 'description', 'manufacturing_date', 'expiration_date')
      .whereNull('deleted_at')
      .orderBy('name', 'asc')
  }

  async show({ params }: HttpContext): Promise<Product> {
    const id: number = params.id;
    return Product
      .query()
      .where('id', id)
      .preload('sales')
      .firstOrFail()
  }

  async update({params, request}: HttpContext): Promise<Product> {
    const id: number = params.id;
    const payload = await request.validateUsing(updateProductValidator)
    const product = await Product.findOrFail(id)

    await product.merge(payload).save()

    return product
  }

  async delete({params}: HttpContext): Promise<void> {
    const id: number = params.id;
    const product = await Product.findOrFail(id)
    product.deletedAt = DateTime.local()
    await product.save()
  }
}

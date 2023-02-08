import Client from '../database'
import { Product } from './product';

export type Order = {
    id?: number;
    products_IDs: string[];
    quantites: number[];
    user_id: Number;
    status: string,
}

export class OrderStore {

  async show(user_id: string): Promise<Order|undefined> {
    try {
        const sql1 = 'SELECT * FROM orders WHERE user_id=($1)'
        const sql2 = 'SELECT product_id, quantity FROM orders_products WHERE order_id=($1)'
        const conn = await Client.connect()
        const orderResult = await conn.query(sql1, [user_id])
        const order = orderResult.rows[0] as Order;
        if(orderResult.rows[0]) {
            const res = await conn.query(sql2, [order.id])
            conn.release()
            const orderWithProds = {
                ...order,
                products: res.rows
            }
            return orderWithProds;
        }else {
            return undefined;
        }
        
    } catch (err) {
        throw new Error(`Could not get order with user_id: ${user_id}`)
    }
  }

}
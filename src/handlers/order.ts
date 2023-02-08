import express, { Request, Response } from 'express'
import { Order, OrderStore } from '../models/order'
import jwt from 'jsonwebtoken'
const store = new OrderStore()

const show = async (_req: Request, res: Response) => {
    try {
        try {
            const authorizationHeader = _req.headers.authorization as string
            const token = authorizationHeader.split(' ')[1]
            jwt.verify(token, process.env.TOKEN_SECRET as string)
        } catch(err) {
            res.status(401)
            res.json('Access denied, invalid token')
            return
        }
       try {
        const order = await store.show(_req.params.user_id)
        if(order) {
            res.json(order)
        }else {
            res.json("Hasn't Order Yet!")
        }
       }catch(err) {
        res.status(400)
        res.json("This user hasn't made an Order Yet!")
       }
    }catch(error) {
        res.status(400)
        res.json(error)
    }
}
const ordersRoutes = (app: express.Application) => {
  app.get('/orders/:user_id', show)
}

export default ordersRoutes
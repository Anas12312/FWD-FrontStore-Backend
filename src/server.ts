import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import productsRoutes from './handlers/product'
import userRoutes from './handlers/user' 
import ordersRoutes from './handlers/order'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"
dotenv.config();
app.use(bodyParser.json())
productsRoutes(app)
userRoutes(app)
ordersRoutes(app)
app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})
console.log(process.env.PORT)
app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
export default app;
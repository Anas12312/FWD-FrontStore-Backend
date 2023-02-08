import express, { Request, Response } from 'express'
import dotenv from 'dotenv';
import jwt, { Secret } from 'jsonwebtoken'

import { User, UserStore } from '../models/user'

const store = new UserStore()


const index = async (_req: Request, res: Response) => {
    try {
        const authorizationHeader = _req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET as string)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }

    const users = await store.index()
    res.json(users)
}

const show = async (_req: Request, res: Response) => {
    try {
        const authorizationHeader = _req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET as string)
    } catch(err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
    console.log(_req.params.id)
    const user = await store.show(_req.params.id)
    if(user) {
        res.json(user);
    }else {
        res.json("Not Found!")
    }
}

const create = async (_req: Request, res: Response) => {
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
        const user: User = {
            firstname: _req.body.firstname,
            lastname: _req.body.lastname,
            password: _req.body.password
        }

        const newUser = await store.create(user)
        var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET as string);
        res.json(token)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}


const userRoutes = (app: express.Application) => {
    app.get('/users', index)
    app.get("/users/:id", show)
    app.post('/users', create)
}

export default userRoutes
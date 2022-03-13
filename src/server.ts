import express from 'express'
import { principalRoutes } from './api/principal.router'

const app = express()


app.use(principalRoutes)

app.listen(3000) 
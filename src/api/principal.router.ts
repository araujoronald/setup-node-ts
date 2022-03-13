import { Router } from 'express'

const router = Router()

router.get('/', (request, response) => {
    response.json({ message: 'Olá Mundo!!!' })
})

export { router as principalRoutes }
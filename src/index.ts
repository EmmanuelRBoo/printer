import express from 'express'
import swagger from 'swagger-ui-express'
import swaggerDoc from './swagger.json'
import { PORT } from './constants'
import { userRouter, folderRouter, fileRouter } from './routes'

const app = express()

app.use(express.json())

app.use('/api/v1/api-docs', swagger.serve, swagger.setup(swaggerDoc))

app.use('/api/v1/auth', userRouter)
app.use('/api/v1/folder', folderRouter)
app.use('/api/v1/file', fileRouter)

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`))
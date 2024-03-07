import express from 'express'
import { PORT } from './constants'
import { userRouter, folderRouter, fileRouter } from './routes'

const app = express()

app.use(express.json())

app.use('/api/v1/auth', userRouter)
app.use('/api/v1/folder', folderRouter)
app.use('/api/v1/file', fileRouter)

app.listen(PORT, () => console.log(`Listen on port: ${PORT}`))
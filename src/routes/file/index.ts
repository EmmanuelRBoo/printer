import { Router } from 'express'
import { file } from '../../controllers'
import { authMiddleware } from '../../middlewares'

const fileRouter = Router()

fileRouter.get('/:folderId',
    authMiddleware.isTokenCorrect,
    file.getAllFiles
)

fileRouter.post('/',
    authMiddleware.isTokenCorrect,
    file.createFile
)

fileRouter.put('/:id',
    authMiddleware.isTokenCorrect,
    file.updateFileTitle
)

fileRouter.delete('/:id',
    authMiddleware.isTokenCorrect,
    file.removeFile
)

export default fileRouter
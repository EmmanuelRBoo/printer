import { Router } from 'express'
import { file } from '../../controllers'

const fileRouter = Router()

fileRouter.get('/',
    file.getAllFiles
)

fileRouter.post('/',
    file.createFile
)

fileRouter.put('/:id',
    file.updateFileTitle
)

fileRouter.delete('/:',
    file.removeFile
)

export default fileRouter
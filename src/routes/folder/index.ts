import { Router } from 'express'
import { authMiddleware, sharedFolder } from '../../middlewares'
import { folder } from '../../controllers'

const folderRouter = Router()

folderRouter.get('/',
    authMiddleware.isTokenCorrect,
    authMiddleware.isPermissions,
    folder.getFolders
)

folderRouter.put('/:id',
    authMiddleware.isTokenCorrect,
    authMiddleware.isPermissions,
    folder.updateFolderTitle
)

folderRouter.post('/', 
    authMiddleware.isTokenCorrect,
    authMiddleware.isPermissions,
    folder.createFolder
)

folderRouter.delete('/:id',
    authMiddleware.isTokenCorrect,
    authMiddleware.isPermissions,
    folder.removeFolder
)

folderRouter.get('/share',
    authMiddleware.isTokenCorrect,
    folder.getShareFolder
)

folderRouter.post('/share',
    authMiddleware.isTokenCorrect,
    sharedFolder.isAlreadyExistRelation,
    folder.shareFolder
)

folderRouter.delete('/share/:id', 
    authMiddleware.isTokenCorrect,
    folder.removeShareFolder
)

export default folderRouter
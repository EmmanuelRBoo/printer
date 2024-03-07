import { Router } from 'express'
import { user } from '../../controllers'
import { userMiddleware } from '../../middlewares'

const userRouter = Router()

userRouter.post('/login', 
    userMiddleware.isEmailNotExist,
    userMiddleware.isValidPassword,
    user.login
)


userRouter.post('/register',
    userMiddleware.isEmailAlreadyExist,
    user.register
)

userRouter.put('/permission/:id',
    user.updatePermission
)

export default userRouter
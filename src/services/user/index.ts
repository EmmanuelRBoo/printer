import db from '../../db'
import { ICreateUser, IGetUser, IUserPermissions } from '../../interfaces'

const getUserByLogin = async ({ email, password }: IGetUser) => {
    return await db.user.findUnique({ where: { email, password } })
}

const getUserByEmail = async (email: string) => {
    return await db.user.findUnique({ where: { email } })
}

const createUser = async (data: ICreateUser) => {
    return await db.user.create({ data })
}

const updatePermission = async ({ id, permissions }: IUserPermissions) => {
    return await db.user.update({ where: { id }, data: { permissions } })
}

export default {
    getUserByLogin,
    getUserByEmail,
    createUser,
    updatePermission
}
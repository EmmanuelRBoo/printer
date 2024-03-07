export interface ICreateUser {
    username: string
    email: string
    password: string
    roleId: number
}

export interface IGetUser {
    email: string
    password: string
}

export interface IUserPermissions {
    id: string
    permissions: string[]
}
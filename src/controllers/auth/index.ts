import jwt from 'jsonwebtoken'
import { SECRET } from '../../constants'
import { IToken } from '../../interfaces'

const verify = (token: string) => {
    return jwt.verify(token, SECRET)
}

const sign = (data: IToken) => {
    return jwt.sign(data, SECRET, { expiresIn: '7d' })
}

export default {
    verify,
    sign
}
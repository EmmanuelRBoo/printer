import { config } from 'dotenv'

config()

export const PORT: number = Number(process.env.PORT) || 3333
export const SECRET: string = String(process.env.SECRET) || ''
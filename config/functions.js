import crypto from 'crypto'

export function code(digits = 20){
    return crypto.randomBytes(digits).toString('hex')
}
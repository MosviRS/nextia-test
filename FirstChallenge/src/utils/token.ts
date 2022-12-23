import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/constants';
/**
 * 
 * @param {Object} user
 * @returns token generated with the id, name and email
 */
const generate = ({id,name,email}) => {
    return jwt.sign({ id,name, email}, JWT_SECRET_KEY, { expiresIn: '1d'});
};
/**
 * 
 * @param token 
 * @returns the decoded token
 */
const decode = (token) => {
    return jwt.verify(token, JWT_SECRET_KEY);
};
export {
    generate,
    decode
}
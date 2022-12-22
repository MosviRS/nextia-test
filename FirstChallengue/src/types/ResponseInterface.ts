import { UserResponseInterface} from './UserResponseInterface';
export interface ResponseInterface {
    status: boolean,
    message: string,
    user: UserResponseInterface | null;
    token?:string
}
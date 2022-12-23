import { UserInterface} from './UserInterface';
export interface ResponseUserInterface {
    status: boolean,
    message: string,
    user: UserInterface | null;
    token?:string
}
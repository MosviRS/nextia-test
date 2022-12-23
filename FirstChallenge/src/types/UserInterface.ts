import { BaseInterface } from '../types/BaseInterface';
export interface UserInterface extends BaseInterface {
    name?: string; 
    email:string;
    password:string;
}
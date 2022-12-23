import { GoodInterface } from './GoodInterface';
export interface ResponseGoodInterface {
    status: boolean,
    message: string,
    good?: GoodInterface| null;
    goods?:Array<GoodInterface>
}
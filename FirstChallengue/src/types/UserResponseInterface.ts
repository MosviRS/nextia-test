export interface UserResponseInterface {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name?: string; 
    email:string;
    password:string;
}
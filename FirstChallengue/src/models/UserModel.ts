import { DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';
import { BaseModel } from './BaseModel';

export class User extends BaseModel {
  public name!: string;
  public email!: string;
  public password!:string;
}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
});
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';
export class BaseModel extends Model {
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

BaseModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize, 
  modelName: 'BaseModel',
  tableName: 'base_models',
  timestamps: false, 
  freezeTableName: true,
});





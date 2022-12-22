import { DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';
import { BaseModel } from './BaseModel';
import { User } from './UserModel';

export class Goods extends BaseModel {
  public article!: string;
  public description!: string;
  public userId!: number;
}

Goods.init({
  article: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Good',
  tableName: 'goods',
});

// Establece la relación entre Goods y User
Goods.belongsTo(User, {
  foreignKey: 'userId',
  as: 'User',
});
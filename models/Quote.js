const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Quote model
class Quote extends Model {}
    

Quote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    quoter: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
      min:15,
      max: 45,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'quote'
  }
);

module.exports = Quote;

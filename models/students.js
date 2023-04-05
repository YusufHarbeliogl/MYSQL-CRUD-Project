'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  students.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: "Please Fill The Name Field"
        }
      }
    },
    age: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: "Please Fill The Age Field"
        }
      }
    },
    class: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg: "Please Fill The Class Field"
        }
      }
    },
    taken_courses: {
      type: DataTypes.JSON,
      defaultValue: JSON.stringify([])
    }
  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};
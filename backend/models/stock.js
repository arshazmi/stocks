'use strict';
 const {
   Model
 } = require('sequelize');
 module.exports = (sequelize, DataTypes) => {
   class Stock extends Model {
     /**
      * Helper method for defining associations.
      * This method is not a part of Sequelize lifecycle.
      * The `models/index` file will call this method automatically.
      */
     static associate(models) {
       // define association here
     }
   };
   Stock.init({
    serial: {
      type: DataTypes.INTEGER,
      field: 'serial_num' 
    },
    name: {
      type: DataTypes.STRING
    },
    cmp: {
      type: DataTypes.FLOAT
  },
  marketCap: {
    type: DataTypes.FLOAT,
    field: 'market_cap' 
  },
  stock: {
    type: DataTypes.FLOAT
  },
  dividendYield: {
    type: DataTypes.FLOAT,
    field: 'dividend_yield' 
  },
  roce: {
    type: DataTypes.FLOAT 
  },
  roe: {
    type: DataTypes.FLOAT
  },
  deptEquity: {
    type: DataTypes.FLOAT,
    field: 'dept_equity' 
  },
  eps: {
    type: DataTypes.FLOAT 
  },
  reserve: {
    type: DataTypes.FLOAT 
  },
  debt: {
    type: DataTypes.FLOAT 
  }
   }, {
     sequelize,
     modelName: 'stock',
   });
   Stock.associate = (models) => {

   }
   return Stock;
 };
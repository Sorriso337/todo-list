'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      administrator:{
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      token:{
        allowNull:true,
        type: DataTypes.STRING(1024),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.dropTable('user');
    }
};

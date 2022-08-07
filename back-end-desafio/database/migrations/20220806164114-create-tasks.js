'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, DataTypes) {
    return queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      concluded: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      late: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      idUser: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      deadline: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      concludedAt: {
        allowNull: true,
        type: DataTypes.DATE,
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

    return queryInterface.dropTable('task');
    }
};

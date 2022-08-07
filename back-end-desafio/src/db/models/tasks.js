module.exports = (sequelize, DataTypes) => {
    const Tasks = sequelize.define('tasks', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      description: DataTypes.STRING,
      deadline: DataTypes.DATE,
      concluded: DataTypes.BOOLEAN,
      late: DataTypes.BOOLEAN,
      idUser: DataTypes.INTEGER,
      concludedAt: DataTypes.DATE,
    },{
      tableName: 'tasks',
      timestamps:true
    });
  
    Tasks.associate = (models) => {
      Tasks.belongsTo(models.user, { 
        foreignKey: "idUser"
      })
    }
    return Tasks;
  }
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      administrator: DataTypes.BOOLEAN,
      token: [
        DataTypes.STRING
      ],
    },{
      tableName: 'user',
      timestamps: true
    });
  

    
    User.associate = (models) => {
      User.hasMany(models.tasks, {
        foreignKey: 'id' 
      })
    }

    return User;
  }
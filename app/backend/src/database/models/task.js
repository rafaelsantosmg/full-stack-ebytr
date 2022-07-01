module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      status: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATEONLY,
      updated: DataTypes.DATEONLY,
    },
    {
      timestamps: false,
      tableName: 'tasks',
    },
  );

  Task.associate = (model) => {
    Task.belongsTo(model.User, {
      as: 'users',
      foreignKey: 'userId',
    });
  };

  return Task;
};

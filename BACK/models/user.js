'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.INTEGER,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
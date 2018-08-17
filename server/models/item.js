'use strict'
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'item',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      belongsTO: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {}
  )
  return Item
}

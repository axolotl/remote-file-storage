'use strict'
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define(
    'Item',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize.literal('uuid_generate_v4()')
      },
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      belongsTo: DataTypes.STRING,
      location: DataTypes.STRING,
      locationAWS: DataTypes.STRING,
      size: DataTypes.INTEGER
    },
    {}
  )
  Item.associate = function(models) {
    // associations can be defined here
  }
  return Item
}

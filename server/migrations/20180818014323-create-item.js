'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() => {
        return queryInterface.createTable('Items', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.literal('uuid_generate_v4()')
          },
          name: {
            allowNull: false,
            type: Sequelize.STRING
          },
          type: {
            allowNull: false,
            type: Sequelize.STRING
          },
          belongsTo: {
            allowNull: false,
            type: Sequelize.STRING
          },
          location: {
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        })
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items')
  }
}

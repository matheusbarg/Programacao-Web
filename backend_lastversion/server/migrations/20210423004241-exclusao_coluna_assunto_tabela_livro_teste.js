'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'livros_teste',
      'assunto',
      );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('livros_teste');
  }
};

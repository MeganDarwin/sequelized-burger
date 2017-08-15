'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Burgers', [
      { burger_name: 'Veggie Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Cheeseburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Bacon Cheeseburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
    ],  {});
  },

  down: function (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('Burgers', null, {truncate : true});
  }
};
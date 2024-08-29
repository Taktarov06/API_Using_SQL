'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('registrations', [
      {
        student_id: 1,
        curse_id: 1,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 2,
        curse_id: 2,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 3,
        curse_id: 3,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 4,
        curse_id: 4,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('registrations', null, {});
  }
};

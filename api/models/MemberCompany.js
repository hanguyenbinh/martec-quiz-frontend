/**
 * MemberCompany.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true,
      description: 'Company name.',
      maxLength: 120
    },

    status: {
      type: 'string',
      isIn: ['active', 'deleted'],
      defaultsTo: 'active',
      description: 'The confirmation status of the company\'s account.'
    },

  },

};


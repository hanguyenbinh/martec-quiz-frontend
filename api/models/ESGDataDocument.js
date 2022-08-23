/**
 * ESGDataDocument.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    company: {
      required: true,
      type: 'number', columnType: 'INT(11)',
      description: 'Member Company record id',
    },

    description: {
      required: true,
      type: 'string',
      maxLength: 255
    },

    internalFile: {
      required: true,
      type: 'string',
      maxLength: 255
    },

  },

};


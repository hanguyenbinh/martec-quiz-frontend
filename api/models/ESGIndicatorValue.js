/**
 * ESGIndicatorValue.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    indicator: {
      required: true,
      type: 'number', columnType: 'INT(11)'
    },

    key: {
      required: true,
      type: 'string'
    },

    value: {
      required: true,
      type: 'string'
    }

  },

};


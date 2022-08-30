module.exports = {


  friendlyName: 'View submit history',


  description: 'Display "Submit history" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/submit-history'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

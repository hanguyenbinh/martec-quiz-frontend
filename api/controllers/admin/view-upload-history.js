module.exports = {


  friendlyName: 'View upload history',


  description: 'Display "Upload history" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/upload-history'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

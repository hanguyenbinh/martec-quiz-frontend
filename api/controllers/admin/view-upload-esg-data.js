module.exports = {


  friendlyName: 'View upload esg data',


  description: 'Display "Upload esg data" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/upload-esg-data'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

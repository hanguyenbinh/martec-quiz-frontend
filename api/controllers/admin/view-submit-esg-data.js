module.exports = {


  friendlyName: 'View submit ecg data',


  description: 'Display "Submit ecg data" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/submit-esg-data'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};

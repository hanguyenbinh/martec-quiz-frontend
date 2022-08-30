
module.exports = {

  friendlyName: 'Submit ecg data',

  description: '',

  inputs: {
    data: {
      required: true,
      type: 'ref'
    }
  },

  fn: async function ({ data }) {
    const company = this.req.me.company;
    const submission = await ESGDataSubmission.create({ company }).fetch();
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i], value = data[key];
      await ESGDataSubmissionValue.create({ submission: submission.id, key, value });
    }
    return {};
  }

};

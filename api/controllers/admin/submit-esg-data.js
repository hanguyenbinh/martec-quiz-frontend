
const ALL_ESH_DATA_KEYS = [
  "0a", "0b", "0c", "0d", "0e", "0f",
  "1a1.1", "1a1.2", "1a1.3", "1a2.1", "1a2.2", "1a3", "1a4", "1c1", "1c2", "1d1", "1d2", "1d3", "1d4", "1e1",
  "2a1", "2a2"
]

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
    const yearOfRecord = data["0a"];
    return {};
  }

};

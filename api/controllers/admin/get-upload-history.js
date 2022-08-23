module.exports = {

  friendlyName: 'Get upload history',

  fn: async function () {
    const company = this.req.me.company;
    const uploadHistoryRecords = await ESGDataDocument.find({company}).sort("createdAt DESC");
    for (let i = 0; i < uploadHistoryRecords.length; i++) {
      const u = uploadHistoryRecords[i];
      delete u.internalFile;
    }
    return {
      uploadHistoryRecords
    };
  }

};

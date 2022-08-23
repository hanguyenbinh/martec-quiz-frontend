parasails.registerPage('upload-history', {
  
  data: {
    uploadHistoryRecords: []
  },

  beforeMount: function() {
    _.extend(this, window.SAILS_LOCALS);
  },
  mounted: async function() {
    const { uploadHistoryRecords } = await Cloud.getUploadHistory();
    // console.log("uploadHistoryRecords", uploadHistoryRecords);
    for (let i = 0; i < uploadHistoryRecords.length; i++) {
      const u = uploadHistoryRecords[i];
      u.uploadDateTime = moment(u.createdAt).format('DD MMM YYYY HH:mm:ss');
      u.asOfDate = moment(u.updatedAt).format('YYYY MMM');
      u.blockchainHash = "0x1d797b2da07490093b07468ce27169423b7cbdd69f298b1bdd7a859eaf4585f6".substr(0, 24) + "...";
    }
    this.uploadHistoryRecords = uploadHistoryRecords;
  },

  methods: {
  
  }
});

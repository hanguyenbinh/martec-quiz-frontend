parasails.registerPage('upload-esg-data', {

  data: {
    uploading: false,
    browsedFilename: '',
    formData: {
      description: ''
    }
  },

  beforeMount: function() {
    _.extend(this, window.SAILS_LOCALS);
  },
  mounted: async function() {

  },


  methods: {
    upload: async function () {
      this.uploading = true;
      await Cloud.uploadEsgData(this.formData.description, this.$refs.esgDataDocument.files[0]);
      this.uploading = false;
      this.goto("/admin/view-esg-data");
    },
    onChangeEsgDataDocument: async function () {
      if (this.$refs.esgDataDocument.files[0]) {
        this.browsedFilename = this.$refs.esgDataDocument.files[0].name;
      } else {
        this.browsedFilename = '';
      }
    },
    removeBrowsedFile: async function () {
      this.$refs.esgDataDocument.value = null;
      this.browsedFilename = '';
    }
  }
});

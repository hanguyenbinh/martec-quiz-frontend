parasails.registerPage('submit-esg-data', {

  data: {
    formData: {},
    formErrors: {}
  },

  beforeMount: function() {
    _.extend(this, window.SAILS_LOCALS);
  },
  mounted: async function() {

  },

  methods: {

  }
});

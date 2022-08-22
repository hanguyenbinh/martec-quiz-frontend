/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"observeMySession":{"verb":"POST","url":"/api/v1/observe-my-session","args":[],"protocol":"io.socket"},"uploadEsgData":{"verb":"POST","url":"/api/v1/admin/upload-esg-data","args":["description","file"]}}
  /* eslint-enable */

});


const ATTACHMENT_DIR = sails.config.custom.attachmentDirectory, ATTACHMENT_MAX_BYTES = sails.config.custom.attachmentMaxBytes;
const path = require('path');

const upload = (file) => new Promise((resolve,reject) => {
  const dirname = path.resolve(ATTACHMENT_DIR, `documents`);
  file.upload({
    dirname,
    maxBytes: ATTACHMENT_MAX_BYTES
  }, async (e, uploadedFiles) => {
    if (e) { return reject(e); }
    const uploadedFile = uploadedFiles[0];
    return resolve(uploadedFile);
  });
});

module.exports = {

  friendlyName: 'Upload esg data',

  description: '',

  files: ["file"],

  inputs: {
    description: {
      required: true,
      type: 'string'
    },
    filename: {
      required: true,
      type: 'string'
    },
    file: {
      required: true,
      type: "ref",
    },
  },

  exits: {
    success: {
      description: 'The image file has been uploaded successfully.'
    }
  },

  fn: async function (inputs) {
    const company = this.req.me.company;
    const { description, filename, file  } = inputs;
    const uploadedFile = await upload(file);
    const basename = path.basename(uploadedFile.fd);
    const data = {
      company,
      description,
      filename,
      internalFile: basename
    };
    const eSGDataDocument = await ESGDataDocument.create(data).fetch();
    return {
      doc: eSGDataDocument.id
    };
  }

};

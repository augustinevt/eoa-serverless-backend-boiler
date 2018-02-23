const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const s3 = new AWS.S3();

module.exports.list = (event, context, callback) => {
  console.log(event);
  s3.listObjects({
    Bucket: 'eoautilstorage'
  }, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

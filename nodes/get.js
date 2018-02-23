const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const s3 = new AWS.S3();

module.exports.get = (event, context, callback) => {
  s3.getObject({
    Bucket: 'eoautilstorage',
    Key: event.id
  }, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, data.Body.toString('utf-8'));
    }
  });
};

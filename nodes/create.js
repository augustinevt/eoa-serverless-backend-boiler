const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const s3 = new AWS.S3();

module.exports.create = (event, context, callback) => {
  console.log(event);
  const node = event.nodes[0];
  s3.putObject({
    Bucket: 'eoautilstorage',
    Key: node.id,
    Body: node.data
  }, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

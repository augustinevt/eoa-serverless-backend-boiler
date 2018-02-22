module.exports.create = (event, context, callback) => {
  console.log(event);
  const nodes = event.nodes;
  callback(null, nodes);
};

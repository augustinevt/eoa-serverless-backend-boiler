module.exports.patch = (event, context, callback) => {
  console.log(event);
  const nodes = [ { nodes: event.nodes, operation: event.operation } ];
  callback(null, nodes);
};

module.exports.update = (event, context, callback) => {
  console.log(event);
  const nodes = [ { id: `${event.id}`, message: "update"} ];
  callback(null, nodes);
};

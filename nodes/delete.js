module.exports.delete = (event, context, callback) => {
  console.log(event);
  const nodes = [ { id: `${event.id}`, message: "delete"} ];
  callback(null, nodes);
};

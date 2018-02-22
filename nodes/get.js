module.exports.get = (event, context, callback) => {
  console.log(event);
  const nodes = [ { _id: `${event.id}`, message: "get"} ];
  callback(null, nodes);
};

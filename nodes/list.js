module.exports.list = (event, context, callback) => {
  console.log(event);
  const nodes = [ { _id: "one", message: "list"}, { _id: "two", message: "list"}];
  callback(null, nodes);
};

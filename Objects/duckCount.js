function duckCount() {
  return Array.protoype.slice.call(arguments).filter((obj) => {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length;
}

module.exports = duckCount

const { slice } = Array.prototype;

function logger(namespace) {
  return function () {
    console.log.apply(console, [namespace].concat(slice.call(arguments)));
  };
}

module.exports = logger;

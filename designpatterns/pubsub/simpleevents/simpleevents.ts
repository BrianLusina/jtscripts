function Event() {
  this.handlers = new Set();
}

Event.prototype.subscribe = function (func) {
  this.handlers.add(func);
};

Event.prototype.unsubscribe = function (func) {
  this.handlers.delete(func);
};

Event.prototype.emit = function (...args) {
  this.handlers.forEach((func) => {
    func(...args);
  });
};

export default Event;

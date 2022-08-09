function Spy(target, method) {
  const spy = { count: 0 };
  const oldie = target[method];

  target[method] = function () {
    spy.count++;
    return oldie.apply(target, arguments);
  };

  return spy;
}

module.exports = Spy;

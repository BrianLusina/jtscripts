function getDependencies(mod, prop) {
  prop = prop || [];
  const depend = (mod && mod.dependencies) || [];
  Object.keys(depend).forEach(function (dep) {
    const key = dep + '@' + mod.dependencies[dep].version;
    if (prop.indexOf(key) === -1) {
      prop.push(key);
    }
    getDependencies(mod.dependencies[dep], prop);
  });
  return prop.sort();
}

module.exports = getDependencies;

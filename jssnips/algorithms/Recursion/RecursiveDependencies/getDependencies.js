function getDependencies(mod, prop) {
	prop = prop || [];
	var depend = mod && mod.dependencies || [];
	Object.keys(depend).forEach(function (dep) {
		var key = dep + '@' + mod.dependencies[dep].version;
		if (prop.indexOf(key) === -1) {
			prop.push(key);
		}
		getDependencies(mod.dependencies[dep], prop);
	});
	return prop.sort();
}

module.exports = getDependencies;

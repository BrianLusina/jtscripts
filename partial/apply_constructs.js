/* You can use apply to chain constructors for an object, similar to Java. In the following example we will create a global Function method called construct, which will enable you to use an array-like object with a constructor instead of an arguments list.
 */
Function.prototype.construct = function (aArgs) {
	var oNew = Object.create(this.prototype);
	this.apply(oNew, aArgs);
	return oNew;
};

/* Note: The Object.create() method used above is relatively new. For an alternative method using closures, please consider the following alternative:
*/
Function.prototype.construct_v2 = function (aArgs) {
	var fConstructor = this,
		fNewConstr = function () {
			fConstructor.apply(this, aArgs);
		};
	fNewConstr.prototype = fConstructor.prototype;
	return new fNewConstr();
};

// EXAMPLE USAGE
function MyConstructor() {
	for (var nProp = 0; nProp < arguments.length; nProp++) {
		this['property' + nProp] = arguments[nProp];
	}
}

var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property0);                // logs 4
console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance.property2);                // logs false
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'

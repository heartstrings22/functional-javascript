function repeat(fun, num){
	if (num > 0) {
		return fun(arguments.callee, num--);
	}
	return;
}

module.exports = repeat;
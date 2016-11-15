
function parse(str) {
	var ret = Object.create(null)
	str = str.trim().replace(/^(\?|#|&)/, '')
	if (!str) return ret
	str.split('&').forEach(function(param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;
		key = decodeURIComponent(key);
		val = val === undefined ? null : decodeURIComponent(val);
		if (ret[key] === undefined) {ret[key] = val} 
		else if (Array.isArray(ret[key])) {ret[key].push(val)} 
		else {ret[key] = [ret[key], val]}
	})
	return ret;
}

function stringify(obj) {
	return obj ? Object.keys(obj).sort().map(function(key) {
		var val = obj[key];
		if (val === undefined) {return ''}
		if (val === null) {return encodeURIComponent(key)}
		if (Array.isArray(val)) {
			var result = [];
			val.slice().forEach(function (val2) {
				if (val2 === undefined) {return}
				if (val2 === null) {result.push(encodeURIComponent(key))} 
				else {result.push(encodeURIComponent(key) + '=' + encodeURIComponent(val2))}
			})
			return result.join('&')
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(val)
	})
	.filter(function(x) {return x.length > 0})
	.join('&') : ''
}

module.exports = {
	parse:parse,
	stringify:stringify
}

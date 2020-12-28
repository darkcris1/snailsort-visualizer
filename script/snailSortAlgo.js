function snailSort(arr) {
	let result = [];
	while (arr.length) {
		if (arr.length === 1) {
			return [...result,...arr[0]];
		}
		for (let i = 0; i < arr[0].length; i++) {
			result.push(arr[0][i]);
		}
		arr.shift();
		for (let j = 0; j < arr.length; j++) {
			result.push(arr[j][arr[j].length - 1]);
			arr[j].pop();
		}
		for (let k = arr[arr.length - 1].length - 1; k >= 0; k--) {
			result.push(arr[arr.length -	1][k]);
		}
		arr.pop();
		for (let l = arr.length - 1; l >= 0; l--) {
			result.push(arr[l][0]);
			arr[l].shift();
		}
	}
	return result;
}

export default snailSort;
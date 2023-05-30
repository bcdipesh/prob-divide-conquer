function findFloor(arr, x) {
	let low = 0;
	let high = arr.length - 1;

	if (x < arr[low]) {
		return -1;
	}

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		if (arr[mid] === x) {
			return arr[mid];
		} else if (arr[mid] < x) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return arr[high];
}

module.exports = findFloor;

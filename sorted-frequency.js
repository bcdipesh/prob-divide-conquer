function sortedFrequency(arr, num) {
	let firstIndex = findFirst(arr, num);
	if (firstIndex === -1) {
		return -1;
	}

	let lastIndex = findLast(arr, num);
	return lastIndex - firstIndex + 1;
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		if ((mid === 0 || arr[mid - 1] < num) && arr[mid] === num) {
			return mid;
		} else if (arr[mid] < num) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return -1;
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		if (
			(mid === arr.length - 1 || arr[mid + 1] > num) &&
			arr[mid] === num
		) {
			return mid;
		} else if (arr[mid] > num) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return -1;
}

module.exports = sortedFrequency;

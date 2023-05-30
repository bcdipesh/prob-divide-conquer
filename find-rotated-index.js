function findRotatedIndex(arr, num) {
	let pivot = findPivot(arr);

	if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
		return binarySearch(arr, num, 0, pivot - 1);
	} else {
		return binarySearch(arr, num, pivot, arr.length - 1);
	}
}

function findPivot(arr, low = 0, high = arr.length - 1) {
	if (high < low) {
		return 0;
	}
	if (high === low) {
		return low;
	}

	let mid = Math.floor((low + high) / 2);

	if (mid < high && arr[mid] > arr[mid + 1]) {
		return mid + 1;
	}
	if (mid > low && arr[mid] < arr[mid - 1]) {
		return mid;
	}

	if (arr[low] >= arr[mid]) {
		return findPivot(arr, low, mid - 1);
	} else {
		return findPivot(arr, mid + 1, high);
	}
}

function binarySearch(arr, num, low, high) {
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		if (arr[mid] === num) {
			return mid;
		} else if (arr[mid] < num) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return -1;
}

module.exports = findRotatedIndex;

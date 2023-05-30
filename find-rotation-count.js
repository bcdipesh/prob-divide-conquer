function findRotationCount(arr) {
	let pivotIndex = findPivot(arr);
	return pivotIndex;
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

module.exports = findRotationCount;

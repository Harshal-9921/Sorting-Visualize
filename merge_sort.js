async function mergeSort() {
    await mergeSortRecursive(0, size - 1);
    setSortedColors(0, size - 1);
}

async function mergeSortRecursive(low, high) {
    if (low < high) {
        var mid = Math.floor((low + high) / 2);

        await mergeSortRecursive(low, mid);
        await mergeSortRecursive(mid + 1, high);

        await merge(low, mid, high);
    }
}

async function merge(low, mid, high) {
    var n1 = mid - low + 1;
    var n2 = high - mid;

    var leftArray = new Array(n1);
    var rightArray = new Array(n2);

    for (var i = 0; i < n1; i++) {
        leftArray[i] = arr[low + i];
    }
    for (var j = 0; j < n2; j++) {
        rightArray[j] = arr[mid + 1 + j];
    }

    var i = 0, j = 0, k = low;
    
    setColor(low, COMPARE); // Set color for the first element
    await sleep(delay);

    while (i < n1 && j < n2) {
        setColor(mid + 1 + j, COMPARE);
        await sleep(delay);

        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        } else {
            arr[k] = rightArray[j];
            j++;
        }
        setHeight(k, arr[k]);
        setColor(k, SORTED); 
        await sleep(delay);
        k++;
    }

    while (i < n1) {
        arr[k] = leftArray[i];
        setHeight(k, arr[k]);
        setColor(k, SORTED); 
        await sleep(delay);
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = rightArray[j];
        setHeight(k, arr[k]);
        setColor(k, SORTED); 
        await sleep(delay);
        j++;
        k++;
    }
}

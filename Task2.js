function mergeSortString(str) {
    if (str.length <= 1) return str;

    let mid = Math.floor(str.length / 2);
    let left = mergeSortString(str.slice(0, mid));
    let right = mergeSortString(str.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = '';
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result += left[i++];
        } else {
            result += right[j++];
        }
    }

    return result + left.slice(i) + right.slice(j);
}

let exampleString = "webmaster";
console.log(mergeSortString(exampleString)); 

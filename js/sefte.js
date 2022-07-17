var array1 = [1,2,3];
var array2 = [1,2,3];

function areArraySame(array1,array2){
	var count_error = 0;
	if (array1.length === array2.length) {
		for (var i = 0; i < array1.length; i++) {
			if (array1[i]!==array2[i]) {
				count_error+=1;
			}
		}
		if (count_error===0) {
			return true
		}else{
			return false
		}
	}else{
		return false
	}
}

console.log(areArraySame([1,2,3],[1,2,3]));
let arr = [{name:'aditya'}, {name:'ram'}]

function addObject(obj, index) {
	
	for(let i = (arr.length); i > index; i--){
		arr[i] = arr[i-1];
	}
	arr[index] = obj;
     
     //arr.splice(index, 0, obj);
     
}

let newObj = { name :"atharva" }
addObject(newObj, 2)
console.log(arr);


newObj = { name: "hello"}
addObject(newObj, 2)
console.log(arr);


newObj = { name: "lo"}
addObject(newObj, 2)
console.log(arr);
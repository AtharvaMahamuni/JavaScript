let arr = [{name:'aditya'}, {name:'ram'}]

function addObject(obj, index) {
	/* if(!arr[index]){
	  arr[index] = (obj)
	 }
	   else {
	      let temp = arr[index];
	      arr[index] = obj;
	      for(let i = (index + 1); i <= arr.length; i++){
	      arr[i] = temp;
	        if(arr[i+1])
	        temp = arr[i + 1];
	    }
	   } */
     
     arr.splice(index, 0, obj);
     
}

let newObj = { name :"atharva" }
addObject(newObj, 2)

newObj = { name: "hello"}
addObject(newObj, 2)

newObj = { name: "lo"}
addObject(newObj, 2)

console.log(arr);

function kebabToSnake(str){
 if str.indexOf('-'){
 	//Do the conversion
 	str.replace('-','_')
 	return str;
 }
 else{
 	Console.log("The string doesn\'t require conversion");
 }


}
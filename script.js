function firstNonRepeatedChar(str) {
 // Write your code here
	let a = str.charAt(0);
	let count = 1;
	for(i=1 ; i<str.length ; i++){
		if(a!=str.chartAt(i) && count == 1)
		{
			return a;
		}
		else if(a!=str.charAt(i) && count != 1)
		{
			a=str.charAt(i);
			count = 1;
		}
		else
		{
			count++;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

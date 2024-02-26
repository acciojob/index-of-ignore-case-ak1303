function indexOfIgnoreCase(s1, s2) {
  // write your code here
	
let ans = s1.toLowerCase().split(s2.toLowerCase())[0].length;
  return ans==s1.length?-1:ans; 
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2)); 

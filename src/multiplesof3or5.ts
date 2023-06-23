/** 
to find multiples of 3 and 5 below certain number and return their sum, 
multiples of both 3 and 5 (like 15) shouldnt' be duplicated and included in the sum

*/

/*
function solution 
creates empty array 
calls multiples creator fn 2 times for both 3 and 5
returned array of multiples is then passed to another function to remove duplicates

*/


function findMultiples3and5(number: number){
  const multiples: number[] = [];  
  createMultiples(3,multiples,number);
  createMultiples(5,multiples,number);
  removeDuplicates(multiples);
  const sumOfMultiples = multiples.reduce((acc,curr) => acc+curr,0);
  return sumOfMultiples;
 }
 
  
function createMultiples(n: number,array: number[],number: number){
 for(let x=1;x*n<number;x++){
     array.push(n*x);
 }
 return array;
}

function removeDuplicates(array: number[]){
 array.sort((a,b)=> a-b);
 for(let i=0;i<array.length;i++){
     if(array[i]===array[i+1]){
         array.splice(i,1)
         i=-1;
     }
 }
 return array;
}

export default findMultiples3and5;

"use strict";
/**
to find multiples of 3 and 5 below certain number and return their sum,
multiples of both 3 and 5 (like 15) shouldnt' be duplicated and included in the sum

*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
function solution
creates empty array
calls multiples creator fn 2 times for both 3 and 5
returned array of multiples is then passed to another function to remove duplicates

*/
function findMultiples3and5(number) {
    var multiples = [];
    createMultiples(3, multiples, number);
    createMultiples(5, multiples, number);
    removeDuplicates(multiples);
    var sumOfMultiples = multiples.reduce(function (acc, curr) { return acc + curr; }, 0);
    return sumOfMultiples;
}
function createMultiples(n, array, number) {
    for (var x = 1; x * n < number; x++) {
        array.push(n * x);
    }
    return array;
}
function removeDuplicates(array) {
    array.sort(function (a, b) { return a - b; });
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            array.splice(i, 1);
            i = -1;
        }
    }
    return array;
}
console.log(findMultiples3and5(10), 'should be ', 23);
exports.default = findMultiples3and5;

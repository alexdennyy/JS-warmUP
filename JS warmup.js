

function isOldEnoughToVote(age) {
    if(age >= 18){
        return true;
    } else {
        return false;
    }
}



function getProperty(obj, key) {
    return obj.key;
}





function addProperty(obj, key) {
    obj[key] = true;
}




function removeProperty(obj, key) {
    delete obj[key];
}




function isEven(num) {
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
}


function isOdd(num) {
    if(num % 2 == 1){
        return true;
    } else {
        return false;
    }
}


function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}


function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

function joinArrays(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
}

function getAllWords(str) {
    var help = str.split(" ");
    if(str.length == 0){
        help = [];
    }
    return help;
}


function extend(obj1, obj2) {
    for(var key in obj2){
        if(!(key in obj1)){
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}


function removeStringValues(obj) {
    for(var key in obj){
        if(typeof obj[key] == "string"){
            delete obj[key];
        }
    }
    return obj;
}

function getIndexOf(char, str) {
    var charFound = false;
    for(var i = 0; i <= str.length; i++){
        if(str[i] == char){
            charFound = true;
            return i;
        }
    }
    if(!charFound){
        return -1;
    }
}

function keep(array, keeper) {
    var keepArray = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] == keeper){
            keepArray.push(array[i]);
        }
    }
    return keepArray
}

function getLargestElementAtProperty(obj, key) {
    var props = obj["key"];
    var largestNumber = 0;
    console.log(props)
    for(var i = 0; i <= props.length; i++){
        if(props.length == 0){
            return undefined;
            break;
        }
        if(props[i] > largestNumber){
            largestNumber = props[i];
        }
    }
    if(largestNumber == 0){
        return undefined;
    }
    return largestNumber;
}


function calculateBillTotal(preTaxAndTipAmount) {
    var tip = preTaxAndTipAmount * 0.15
    return (preTaxAndTipAmount * 1.095 + tip);
}

function sumDigits(num) {
    var numString = num.toString();
    var increaso = 0;
    var sum = 0;
    if (num < 0){
        sum -= Number(numString[1]);
        increaso += 2;
    }
    for(var i = increaso; i < numString.length; i++){
        sum += Number(numString[i]);
    }
    return sum;
}

function listAllValues(obj) {
    var damnNearNewArray = [];
    for(var key in obj){
        damnNearNewArray.push(obj[key]);
    }
    return damnNearNewArray;
}

function detectOutlierValue(string){
    var splitString = string.split(" ");
    var values = [];
    var evens = 0;
    var odds = 0;
    var evenPos = 1;
    var oddPos = 1;
    for(var i = 0; i < splitString.length; i++){
        values.push(Number(splitString[i]));
    }
    for (var t = 0; t < values.length; t++){
        if(values[t] % 2 == 0){
            evens++
            evenPos = t + 1;
        } else {
            odds++;
            oddPos = t + 1;
        }
    }
    if(evens > odds){
        return oddPos;
    } else {
        return evenPos;
    }
}

function search(array, value) {
    var upperLimit = array.length - 1;
    var lowerLimit = 0;
    var midValue = (array[Math.floor(upperLimit + lowerLimit / 2)]);
    while(value != midValue && upperLimit - lowerLimit >= 2){
        console.log(midValue)
        if(value > array[lowerLimit]){
            upperLimit = getIndexOf(midValue, array);
            return midValue;
        } else {
            lowerLimit = midValue;
            return midValue;
        }
    }
}

function search(array, value) {
    var upperLimit = array.length - 1;
    var lowerLimit = 0;
    var midValue = (array[Math.floor(upperLimit + lowerLimit / 2)]);
    while(value != midValue && upperLimit - lowerLimit >= 2){
        console.log(midValue)
        if(value > array[lowerLimit]){
            upperLimit = getIndexOf(midValue, array);
            return midValue;
        } else {
            lowerLimit = midValue;
            return midValue;
        }
    }
}
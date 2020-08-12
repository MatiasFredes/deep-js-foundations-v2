// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true) {
	Object.is = function ObjectIs(val1, val2) { 
        if(isNotANumber(val1, val2))
            return true;
        else if((1 / val1 == Infinity && 1 / val2 == -Infinity) ||
                (1 / val1 == -Infinity && 1 / val2 == Infinity))
                return false;
        return val1 === val2;
    };

}

function isNotANumber(val1, val2) {
    return typeof val1 == "number" && typeof val2 =="number" &&
        isNaN(val1) && isNaN(val2) && val1 !== val2;
}

// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);

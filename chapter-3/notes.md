# Chapter 3 Functions

## Bindings and Scopes

Scope - part of the program where the binding is visible (accessible)
Lexical scoping - degrees of locality / local scope can access outer scope

## Function Definition

A function definition is defined like so:

```js
const square = function(x) {
  return x * x;
};
```

It is a regular binding where the value of the binding is the given function.

## Declaration Notation

A function declaration defines the binding nd post it at the provided function. This type of function is hoisted to the top of the scope.

```js
function square(x) {
  return x * x;
}
```

## Arrow Functions

```js
// Equivalent function expressions
const square1 = x => {
  return x * x;
};
const square2 = x => x * x;
```

## Call Stack

Computer keeps track of the context from which a function call occurs. The place where this context is stored is knonws as the call stack.

## Closure

The ability to reference a specific instance of a local binding in scope is known as closure.

A parameter is a local binding.

```js
// function multiplier(factor) {
//   return number => number * factor;
// }

const multiplier = factor => {
  return number => number * factor;
};

let twice = multiplier(2);
console.log(twice(5));
```

Function values - both code in body of function and environment in which they are created.

## Recursion

A function that calls itself is a recursive function.

Running through a simple loop is generally cheaper than calling a function multiple times.

Problems that benefit from a recursive approach: any problem that explores or processes several 'branches'.

```js
// Given a number, find sequence of numbers that produces the required number by multiplying by 3 or adding by 5
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
```

## Functions and Side Effects

Functions that create values are easier to combine in new ways than functions that perform side effects.

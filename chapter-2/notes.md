# Chapter 2 Notes

## Expressions and Statements

An expression is a fragment of code that produces a value, e.g. 22 or 'Something'.

A statment is a sentence.

- Use semicolons at the end of a statement to avoid bugs.

## Bindings (variables)

A variable declaration is a statement.

Multiple bindings can be declared on the same line.

```js
let dog = "Harry",
  cat = "Sam";
```

## Environment

Collection of bindings and current values that exist in current state.

## Functions

Call a function by putting parentheses after expression that references function
Argument - a value given to a function

## Return Values

Anything that produces a value is an expression.

## Conditional Execution

Braces can be used to group any number of statements into a single statement (called a block)

## While and Do Loops

```js
// Binding number tracks progress in the program
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

// 0,
// 2
```

```js
let result = 1;
let counter = 0;
while (counter < 10) {
  result *= 2;
  // -> 2, 4, 16, etc.
  counter++;
  //  -> 1, 2, 3
}
console.log(result);
// -> 1024
```

! operator converts value to boolean before negating the value, all strings except "" convert to true

## For Loops

```js
let result = 1;
for (let counter = 0; counter < 10; counter++) {
  result = result * 2;
}
console.log(result);
```

A program is built out of statements which may themselves contain other statements.

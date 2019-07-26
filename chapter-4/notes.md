# Data

Almost all JavaScript values have properties with the exeception of null and undefined.
Expression between brackets is evaluated to get property name.

binary in operator 
```js
let anObject = { left: 1, right: 2};
delete anObject.left;

console.log("left" in anObject);
// false

console.log("right" in anObject);
// true

Object.keys(anObject);
```

## Mutability

There is a difference between two references to the same object and two objects that have the same properties.

```js
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10}

console.log(object1 == object);
// true
console.log(object1 == object3);
// false

object1.value = 15;
console.log(object2.value);
// 15
console.log(object3.value);
// 10
```

object1 and object2 have the same identity

Comparing objects with == only returns true if the objects have the same identity.

If a property name in brace notation isn't provided a value, its value is taken from the binding with the same name.

## Further Arrayology

unshift and shift


```js
let todoList = [];

function remember(task) {
  todoList.push(task);
}

function getTask() {
  return todoList.shift();
}

function rememberUrgently(task) {
  todoList.unshift(task);
}

```

both `indexOf` and `lastIndexOf` take an optional second argument that indicates where to start searching.

```js
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// -> ["a", "b", "d", "e"]
```

## String Methods

```js
console.log(String(6).padStart(3, "0"));
// -> 006
```



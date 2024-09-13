# ALX React — Immutable

0x06. React Immutable

`Front-end`
`JavaScript`
`ES6`
`React`

## What Are Immutable Objects?

Immutable objects are objects whose state cannot be modified after creation.

- **Who**: Developers who need predictable and consistent data structures.
- **What**: Data that never changes once it's created.
- **When**: Useful in functional programming and scenarios where immutability guarantees less bug-prone code.
- **Where**: In applications with heavy state management (e.g., React, Redux).
- **Why**: Helps to avoid side effects, ensuring data consistency and improving performance.

## Using `Immutable.js` for Immutability in JavaScript

To bring immutability into JavaScript, we use the `Immutable.js` library.

1. Install Immutable.js:

   ```
   npm install immutable
   ```

2. Use Immutable structures like `Map`, `List`, etc.

   ```js
   const { Map, List } = require("immutable");

   const myMap = Map({ key: "value" });
   const myList = List([1, 2, 3]);
   ```

## List vs. Map

- **List**: Ordered, index-based data structure, like an array.
- **Map**: Key-value data structure, similar to an object but immutable.

  ```js
  const myList = List([10, 20, 30]);
  const myMap = Map({ a: 1, b: 2 });
  ```

## Merge, Concat, and Deep Merging

1. **Merge**: Combines two Maps or Lists.

   ```js
   const map1 = Map({ a: 1, b: 2 });
   const map2 = Map({ b: 3, c: 4 });
   const mergedMap = map1.merge(map2); // { a: 1, b: 3, c: 4 }
   ```

2. **Concat**: Adds elements from one List to another.

   ```js
   const list1 = List([1, 2]);
   const list2 = List([3, 4]);
   const concatenatedList = list1.concat(list2); // [1, 2, 3, 4]
   ```

3. **Deep Merge**: Merges nested Maps or Lists.

   ```js
   const map1 = Map({ a: Map({ b: 1 }) });
   const map2 = Map({ a: Map({ c: 2 }) });
   const deepMergedMap = map1.mergeDeep(map2); // { a: { b: 1, c: 2 } }
   ```

## Lazy Sequences (Seq)

A **Seq** is a lazy operation in `Immutable.js`. It doesn't calculate values until needed. This can improve performance with large datasets.

```
const seq = Seq([1, 2, 3])
  .map(x => x * 2); // Nothing happens until you access the result
const firstValue = seq.get(0); // Now the calculations start
```

Seq allows efficient chaining and processing of large collections lazily.

## Conclusion

Immutable.js makes handling immutable data structures in JavaScript easy and efficient, reducing bugs and improving the predictability of state management.

## Contact Me

**Email:** ouadia@elouardy.com \
**Twitter:** https://twitter.com/_ELOUARDY

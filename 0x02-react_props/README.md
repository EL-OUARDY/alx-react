# ALX React — React props

0x02. React props

`Front-end`
`JavaScript`
`ES6`
`React`

## Overview

Props (short for "properties") are a core concept in React that allows you to pass data from one component to another. They enable you to create dynamic and reusable components.

## How Props Work

- Props are passed to components similarly to how you pass arguments to functions.
- They are immutable, meaning you cannot modify them inside the component that receives them.
- Props allow components to be more flexible by accepting different inputs.

## Example Usage

Here's a simple example of passing props to a component:

```jsx
import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="El_Ouardy" />;
}

export default App;
```

In this example:

- The `Welcome` component receives a `name` prop and displays it.
- The `App` component passes the `name` prop to `Welcome`.

## Best Practices

- **Use Destructuring:** Destructure props in the function parameters for cleaner code.
- **PropTypes:** Use PropTypes to define the expected data types for your props.
- **Default Props:** Provide default props to ensure your component behaves correctly even if no props are passed.

```jsx
import PropTypes from "prop-types";

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

Welcome.defaultProps = {
  name: "Guest",
};
```

## Conclusion

Props are essential for making React components dynamic and reusable. They help you build components that can adapt to different inputs and contexts.

## Contact Me

**Email:** ouadia@elouardy.com \
**Twitter:** https://twitter.com/_ELOUARDY

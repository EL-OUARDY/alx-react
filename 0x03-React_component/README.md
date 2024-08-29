# ALX React — React component

0x03. React component

`Front-end`
`JavaScript`
`ES6`
`React`

## When to Use a Function or Class Component

**Function Components**: Preferred for most cases due to simplicity and the ability to use hooks for state and lifecycle methods.

```jsx
const MyComponent = () => <div>Hello, World!</div>;
```

**Class Components**: Used less frequently but still applicable for some cases or legacy code.

```jsx
class MyComponent extends React.Component {
  render() {
    return <div>Hello, World!</div>;
  }
}
```

## The Lifecycle of a Class Component

Class components have several lifecycle methods, including:

- **`constructor()`**: Initializes state and binds methods.
- **`componentDidMount()`**: Invoked immediately after the component is mounted. Good for API calls.
- **`shouldComponentUpdate()`**: Determines if the component should re-render.
- **`componentWillUnmount()`**: Called right before the component is removed from the DOM.

## How to Test a Component

- **Jest and Enzyme** are popular for testing React components.
- You can render components and make assertions on their output.

Example:

```js
import { shallow } from "enzyme";
import MyComponent from "./MyComponent";

test("renders correctly", () => {
  const wrapper = shallow(<MyComponent />);
  expect(wrapper.text()).toContain("Hello, World!");
});
```

## How to Utilize a Jest Spy

`Jest spies` can be used to verify if functions are called correctly.

Example:

```js
const myFunction = jest.fn();

myFunction();

expect(myFunction).toHaveBeenCalled();
```

## What an HOC Is and How to Use It

**Higher-Order Components (HOC)**: A function that takes a component and returns a new component.

**HOCs** are used to reuse component logic.

**Purpose**: To encapsulate common logic and behavior that can be reused across multiple components without repeating code.

Example:

```js
function withLogging(WrappedComponent) {
  return function (props) {
    console.log("Rendering:", WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}
```

## How to Optimize Performance and Control Component Rendering

- **`React.memo`**: Use to prevent re-rendering of function components unless props change.
- **`shouldComponentUpdate()`**: Use in class components to control re-rendering.

Example:

```js
const MyComponent = React.memo(function (props) {
  return <div>{props.value}</div>;
});
```

By following these guidelines, you can effectively create, test, and optimize your React components.

## Contact Me

**Email:** ouadia@elouardy.com \
**Twitter:** https://twitter.com/_ELOUARDY

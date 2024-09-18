# ALX React — React state

0x05. React state

`Front-end`
`JavaScript`
`ES6`
`React`

## 1. Component State

State refers to an object that determines how a component renders and behaves. It's used to store data that changes over time or due to user actions.

```jsx
const [count, setCount] = useState(0);
```

## 2. Component Lifecycle

React components go through several lifecycle phases:

- **Mounting**: When a component is created (e.g., `componentDidMount`).
- **Updating**: When state/props change (e.g., `componentDidUpdate`).
- **Unmounting**: When a component is removed (e.g., `componentWillUnmount`).

Using hooks:

```jsx
useEffect(() => {
  // Code on mount and updates
  return () => {
    // Cleanup on unmount
  };
}, [dependency]); // Run effect when dependency changes
```

## 3. Modifying State & Execution Order

State updates are asynchronous. To ensure proper execution:

- Always use the setter function from `useState`.
- Use `useEffect` for code that depends on state changes.

```jsx
setCount((prevCount) => prevCount + 1); // Correct way to modify state
```

## 4. Controlled Component

A controlled component has its input value managed by React state.

```jsx
const [inputValue, setInputValue] = useState("");
<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />;
```

## 5. Forms in React

Forms in React typically use controlled components.

```jsx
function FormComponent() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}
```

## 6. Reusing & Lifting State

To reuse smaller components, keep them **pure** (without side effects). Lift the state to the parent component when needed.

```jsx
function Child({ value, onValueChange }) {
  return (
    <input value={value} onChange={(e) => onValueChange(e.target.value)} />
  );
}

function Parent() {
  const [inputValue, setInputValue] = useState("");
  return <Child value={inputValue} onValueChange={setInputValue} />;
}
```

## 7. React Hooks

React Hooks let you manage state and lifecycle in functional components. You can also create custom hooks for reusable logic.

```jsx
function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return { count, increment };
}
```

## 8. Testing State Changes with Enzyme

To test state changes in React components using Enzyme:

```jsx
import { shallow } from "enzyme";
import Counter from "./Counter";

test("increments counter", () => {
  const wrapper = shallow(<Counter />);
  wrapper.find("button").simulate("click");
  expect(wrapper.find("p").text()).toEqual("Count: 1");
});
```

## Contact Me

**Email:** ouadia@elouardy.com \
**Twitter:** https://twitter.com/_ELOUARDY

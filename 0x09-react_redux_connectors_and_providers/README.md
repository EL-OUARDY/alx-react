# ALX React — Redux

0x09. React Redux Connectors and Providers

`Front-end`
`JavaScript`
`ES6`
`React`

---

## 🔗 Redux Connectors: `connect()`

The `connect()` function connects a React component to the Redux store. It wraps the component, allowing it to subscribe to the store’s state and dispatch actions.

**Syntax:**

```jsx
import { connect } from "react-redux";

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```

### 🔹 Using `mapStateToProps`

This function extracts pieces of state from the Redux store and passes them as props to the component.

**Example:**

```jsx
const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts,
});
```

### 🔹 Using `mapDispatchToProps`

This function passes actions (functions that update the state) to the component as props.

**Example:**

```jsx
import { fetchUser, fetchPosts } from "./actions";

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(fetchUser()),
  getPosts: () => dispatch(fetchPosts()),
});
```

### 🔹 Complete Example with `connect`

```jsx
import React from "react";
import { connect } from "react-redux";
import { fetchUser, fetchPosts } from "./actions";

const MyComponent = ({ user, getUser }) => (
  <div>
    <h1>{user.name}</h1>
    <button onClick={getUser}>Load User</button>
  </div>
);

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = { getUser: fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```

---

## 🔄 Async Action Creators with Redux Thunk

Redux Thunk is a middleware that allows you to write async logic, such as fetching data, in your action creators.

### 🔹 Setting Up Thunk

Install `redux-thunk`:

```bash
npm install redux-thunk
```

### 🔹 Using Async Action Creators

```jsx
import { useDispatch } from "react-redux";

const fetchUser = () => async (dispatch) => {
  const response = await fetch("https://api.example.com/user");
  const data = await response.json();
  dispatch({ type: "USER_LOADED", payload: data });
};
```

### 🔹 Connecting Async Actions to a Component

```jsx
const mapDispatchToProps = { getUser: fetchUser };
export default connect(null, mapDispatchToProps)(MyComponent);
```

---

## 🏠 Redux Provider

The `Provider` component makes the Redux store available to your entire app.

### 🔹 Setting Up the Provider

Wrap your root component with `Provider` and pass the store as a prop.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

---

## 🚀 Optimizing Connectors with Reselect

`Reselect` helps optimize your `mapStateToProps` functions by memoizing (caching) state values, reducing unnecessary renders.

### 🔹 Setting Up Reselect

Install `reselect`:

```bash
npm install reselect
```

### 🔹 Using Reselect with `mapStateToProps`

```jsx
import { createSelector } from "reselect";

const selectPosts = (state) => state.posts;
const selectActivePosts = createSelector([selectPosts], (posts) =>
  posts.filter((post) => post.active)
);

const mapStateToProps = (state) => ({
  activePosts: selectActivePosts(state),
});
```

---

## 🛠️ Debugging with Redux DevTools

Redux DevTools is a browser extension that helps you inspect and debug the state changes in your application.

### 🔹 Setting Up Redux DevTools

Integrate it with your store using this setup:

```jsx
import { createStore } from "redux";
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

### 🔹 Debugging State Changes

With Redux DevTools, you can:

- Inspect every action dispatched.
- View the state tree.
- Time travel to previous states.

---

## 🔑 Key Takeaways

- Use `connect()` to link components to the Redux store.
- `mapStateToProps` maps state to props; `mapDispatchToProps` maps actions to props.
- Redux `Thunk` enables async action creators.
- Use `Provider` to set up your app’s store.
- Optimize with `Reselect`.
- Debug efficiently using Redux DevTools.

## Contact Me

**Email:** ouadia@elouardy.com \
**Twitter:** https://twitter.com/_ELOUARDY

# ALX React — Redux

0x07. React Redux action creator+normalizr

`Front-end`
`JavaScript`
`ES6`
`React`

# React Redux Action Creator + Normalizr

## Purpose of Normalizr

**Normalizr** helps transform nested JSON data into a normalized structure, making it easier to handle in Redux.

### Example:

```js
import { normalize, schema } from 'normalizr';

// Define user schema
const user = new schema.Entity('users');

// Define an article schema with a nested user
const article = new schema.Entity('articles', { author: user });

const data = {
  id: 1,
  title: 'Some Article',
  author: {
    id: 1,
    name: 'John Doe',
  },
};

// Normalize the data
const normalizedData = normalize(data, article);
console.log(normalizedData);
```

Output:

```json
{
  "result": 1,
  "entities": {
    "users": {
      "1": { "id": 1, "name": "John Doe" }
    },
    "articles": {
      "1": { "id": 1, "title": "Some Article", "author": 1 }
    }
  }
}
```

## Schemas & JSON Normalization

Define schemas using **Normalizr** to normalize complex nested JSON. Normalized data ensures that entities (e.g., users) are only stored once, reducing redundancy.

## Core Concepts of Redux

- **Store**: Holds the app state.
- **Actions**: Describes what happened.
- **Reducers**: Determine how the state changes.
- **Dispatch**: Sends actions to reducers.

## Redux Actions

Actions are plain JavaScript objects that describe the event or action that should occur.

### Example:

```json
{
  "type": "ADD_TODO",
  "payload": { "text": "Buy milk" }
}
```

## Redux Action Creators

Action creators are functions that return an action.

### Example:

```js
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: { text },
});
```

## Async Actions in Redux

To handle asynchronous logic (like API calls), we use **Redux Thunk** middleware.

### Example:

```js
export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_REQUEST' });

    try {
      const response = await fetch('/api/data');
      const data = await response.json();

      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', error });
    }
  };
};
```

## Writing Tests for Redux

For testing, use a combination of tools like **Jest** and **Redux Mock Store**.

### Example:

```js

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import \* as actions from './actions';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
afterEach(() => {
   fetchMock.restore();
});

it('creates FETCH_SUCCESS when fetching data has been done', () => {
   fetchMock.getOnce('/api/data', {
      body: { data: 'sample data' }
   });

   const expectedActions = [
      { type: 'FETCH_REQUEST' },
      { type: 'FETCH_SUCCESS', payload: { data: 'sample data' } }
   ];

   const store = mockStore({ data: {} });

   return store.dispatch(actions.fetchData())
      .then(() => {
         expect(store.getActions()).toEqual(expectedActions);
      });
   });
});

```

## Contact Me

**Email:** ouadia@elouardy.com \
**Twitter:** https://twitter.com/_ELOUARDY

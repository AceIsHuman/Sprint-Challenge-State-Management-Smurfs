1. What problem does the context API help solve?

  Context API allows us to access state in child components without having to drill them down using props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  An action is a function called when a user interacts with the page. A reducer is a function that will return a new updated state. A store is where all the state data is held and updated. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state can be used across your application. Component state is defined within the component. If the component is the only piece that needs access to that state, then it would be best to define it within the component. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-thunk is a middleware that allows us to use dispatch() and make async calls within our action-creators. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

  Redux is my favorite state managment system because it allows us to access state from all over our application, and the state can be controlled outside of react.
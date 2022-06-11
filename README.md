# mern-assignments

- More Forms

Using the previous assignment "Hook Form", add error messages.

If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters.
The e-mail is less than 5 characters, say the field must be at least 5 characters.
The passwords must match and be at least 8 characters.
These messages can appear right when you render the page, and will disappear in real time.

- Todo List

Ah, the todo list! A ubiquitous project for any respectable JavaScript framework. Your job is to create a small React application to store and modify a list of tasks. Each task will have a text string as well as a completed property, which will be set to false initially. As you check off items, they should appear slashed out on the page. Using what you know about state and iterating through lists, render a list of items, and give the user the option to remove each item and add new ones. There are different ways to implement the remove function. One way to do it is using the built-in filter method. Filter returns a new array when invoked and is a great way to stay true to the functional nature of React.

- Coin Flipping

Let's say we have a function that simulates flipping a coin...
And we want to use it in a function that sees how long it will take to have a coin land on "heads" five times in a row.
This will take an indeterminate amount of time. If we run the synchronous function above, it will prevent any code that comes after from running while this is taking place.

Your mission is to rewrite the above function using Promises. Make sure your fiveHeads function will call the resolve function when the coin has flipped "heads" five times in a row.

Complete the fiveHeads function so that it will resolve() when "heads" has been flipped five times
Make the fiveHeads function reject() when the coin has been flipped more than 100 times

- Pokemon API
Create a React project that uses the useEffect hook to display the names of all 807 Pokemon using the Pokemon API.

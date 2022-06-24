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

- Axios Pokemon API
  Redo the previous assignment using axios. Using the previous lesson as a starting point, create a React project that uses the useEffect hook to display the names of all 807 Pokemon using the Pokemon API.

- Routing Practice
  localhost:3000/home: This should display the home page, with a generic "Welcome" heading

localhost:3000/4: This should display the number "4", or any other number that was sent through

localhost:3000/hello: This should display the word "hello" or any other word that was sent through

localhost:3000/hello/blue/red: This should display the word "hello" in blue text with a red background. It should work with any other valid word and colors.

- Postman + Pokemon

Use Postman to perform 5 different GET requests to retrieve 5 different Pokemon of your choice. Here is a link to the Pokemon API DOCS.

- Faker API

In this assignment, we will be using 2 Javascript libraries to create a simple API that generates User and Company objects depending on the requested route. The libraries we will be using are Express for the server and Faker for the random data generation. The goal is to start broadening our understanding of APIs.

For this assignment, you are tasked with creating User and Company objects

User Object
password
email
phoneNumber
lastName
firstName
\_id
Company Object
\_id
name
address
street
city
state
zipCode
country

- Using MongoDB

As you create the documents for this assignment, be sure to include students who have:

home_state of California or Washington
lucky_number ranging from 1 to 15
If you read through all tasks, you will understand these requirements better

To complete this assignment, copy your console text from the MongoDB shell in to a text document and upload it to the platform

1. Create a database called 'my_first_db'.

2. Create students collection.

3. Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

4. Create 5 students with the appropriate info.

5. Get all students.
6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).

7. Get all students whose lucky number is greater than 3

8. Get all students whose lucky number is less than or equal to 10

9. Get all students whose lucky number is between 1 and 9 (inclusive)

10. Add a field named 'interests' to all student documents in the collection. The field should be an array and contain the following entries: 'coding', 'brunch', MongoDB'. Add this field to all documents using a single command.

11. Add some unique interests for each particular student into each of their interest arrays.
12. Add the interest 'taxes' into someone's interest array.

13. Remove the 'taxes' interest you just added.

14. Remove all students who are from California.

15. Remove a student by name.

16. Remove a student whose lucky number is greater than 5 (JUST ONE)

17. Add a field to each student collection called 'number_of_belts' and set it to 0.

18. Increment this field by 1 for all students in Washington (Seattle Dojo).

19. Rename the 'number_of_belts' field to 'belts_earned'

20. Remove the 'lucky_number' field.

21. Add a 'updated_on' field, and set the value as the current date.

- Jokes API

To solidify what we've read about mongoose commands and express, lets create a new express project from scratch called "Jokes."

The following wire frame is to show examples of routes (full URLs) and then the returned json.  You are NOT required to create a front end for this assignment.  Please use Postman to verify your routes and output.

You will need to include the following routes:

Route                 VERB     Description

/api/jokes           GET       get all jokes

/api/jokes           POST     create a new joke

/api/jokes/:_id   GET        return a single joke matching this _id

/api/jokes/:_id   PUT        update a single joke matching this _id

/api/jokes/:_id   DELETE  delete a single joke matching this _id

- Product Manager (Part I)

Create a full stack MERN project that will become a complete product manager.
In this assignment, you will add the ability to create a new product on the main page of the app. 

- Product Manager (Part II)

Continue from the previous assignment. On the main page, below the product form, list out all of your products in your database. Then, create a route so that you can see the specifics for a particular product.

- Product Manager (Part III)

Update Product Manager so that you can update and delete your products.

Add the route localhost:3000/edit/:id that will include an auto filled form to edit a given product.


Add a delete button in the List component as well as the detail component that will delete the product from the database


After you delete the product from the Detail component, redirect to the main view


After you delete the product from the main view, update the DOM so that the product is removed.
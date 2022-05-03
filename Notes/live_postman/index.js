// * HANDLING HTTP POST REQUESTS

// * Use case for this server:
// * The client will send a HTTP POST request, containing (in its "body" property) an object with "name" and "age" data
// E.g. A user filled in a form in their browser and clicked a button to send their data to the server via a POST request

// * Client = "who is SENDING the HTTP request?" E.g. a web browser, or Postman.

// * GET request = "The client wants to GET some data FROM the server"
// * POST request = "The client wants to POST ("send") some data TO the server (e.g. to insert into a database)"
// *                E.g. When you create an online account, you click a button to send your details, so they can be added to the site's database

// ============================

// ? Let's track a POST request sent from a client with the following data:

/* 
    {
        name: "Jamie",
        age: 35
    }
*/

import express from "express";

const app = express();

// We can register middleware with app.use()
// ALL requests will go through this middleware, and then be passed onto the next relevant middleware
// This middleware (express.json()) will parse incoming requests, and "translate" any JSON data to standard JS format
// So then we can use it. :-)
// (This may remind you of how we do fetch requests in React!)

// ? 1. Our POST request goes through this middleware!
app.use(express.json());

// An array to contain all the objects received from clients during the current process
const data = [];

// ? 2. Our POST request IGNORES this route! It is a POST request, not a GET request
app.get("/", (req, res, next) => {
    res.send("<h1>The server received a GET request from the client!</h1>")
})

// Set up a POST route
// When the server receives a POST request to this route...
// 1. It will expect to receive some data (an object, with "name" and "age" properties)
// 2. The server will add an "id" property to the object, and then add it to the "data" array...
// And send a response back to the client to confirm everything was successful

// ? 3. Our post request does go into this route (it is a POST request!), so the handler function is executed
// ? Once the handler function completes its logic it sends a RESPONSE to the client as there is nothing more to do...
// ? So our POST request's journey ends here!
app.post("/", (req, res, next) => {
    // Take the data received in the "body" property of the request received from the client
    // const name = req.body.name;
    // const age = req.body.age;
    const { name, age } = req.body;

    const newUser = {
        name: name,
        age: age,
        id: data.length + 1
    }

    // Add the new user object into the "data" array
    data.push(newUser);

    // We want to send back our data to the client in a JSON format
    // So call res.json()
    // Status code 201 = "resource successfully created"
    res.status(201).json(newUser);
})

app.listen(3000, () => {
    console.log("Server listening for requests on port 3000...")
})
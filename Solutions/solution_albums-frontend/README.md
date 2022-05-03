# Express - Linking a React Frontend with a Node/Express Backend

Now it's time to bring your ability to POST album data into the frontend!

To complete this exercise you should use the server you created during the previous exercise. :-)

### Instructions

1. Create a **basic** React UI. This should consist of a heading (e.g. "Add an Album to the Collection!") and a **React form** with the correct fields ("band", "album title" and "album year"). You will also need a button to submit the form. 

**Remember:** You should use `state` in the React app to manage data. So if the user types something into an input, **first** you should update the relevant state variable, and **then** re-render the app so the user can see the change in the input (the "value" attribute of each input will be relevant here!)

2. When you submit the React form (using the `onSubmit` event handler), you should send a `fetch` request using the HTTP "POST" method. You should create a new "album" object based on the current values of the state variables. You can send this "album" object in the `body` of your request.

**Note:** If you need to, you should revise how to make a "POST" request using `fetch`, as it requires an extra argument compared to a "GET" request...

3. Your server should handle the "POST" request (you may need to change a bit of your server logic!) and send back a response. When you have processed the response, make sure to **log the response data** in the browser console so you can be sure your request was successful.
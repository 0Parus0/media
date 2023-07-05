**_ Creating an Async Thunk_**

1. Create a new file for your thunk. Name it after the purpose of the request
2. Create the thunk. Give it a base type as a string as first argument to the thunk function that describes the purpose of the request
3. In the thunk, make the request, return the data that you want to use in the reducer, and export the thunk function.
4. In the slice, add extraReducers, watching for the action types made by the thunk
5. Export the thunk from the store/index.js file
6. When a user does something, dispatch the thunk function to run it

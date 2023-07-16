**_ Creating a RTK Query API _**

1.  Identify a group of related requests that the app needs to make
2.  Make a new file that will create the api
3.  The API needs to store a ton of state related to data, request status, errors, Add a 'reducerPath'
4.  The API needs to know how and where to send requests. Add a 'baseQuery'
5.  Add 'endpoints', one for each kind of request you want to make. Requests that read data are queries, write data are mutations
6.  Export all of the automatically generated hooks
7.  Connect the API to the store. Reducer, middleware, and listeners
8.  Export the hooks from the store/index.js file
9.  Use the generated hooks in component!

**_ Creating endpoints _**
Whats the goal?

I want to fetch a list of albums
I want to create an album
I want to remove and album

Give a simplified name.
fetchAlbums createAlbum removeAlbum

Is this a query or a mutation?
query mutation mutation

What is the path relative to baseUrl for this request
/albums /albums /albums + userId

Whats the query string for this request?
?userId=userId nil nil

What's the method for this request
GET POST DELETE

What's the body for this request

-     {title, userId}       -

**_ What we get back from automatically generated hooks _**

data - Data returned from the server
error - Error, if one occurred
isLoading - True if currently loading data for the "first time"
isFetching - True if currently loading data
refetch - Function tell the query to rerun

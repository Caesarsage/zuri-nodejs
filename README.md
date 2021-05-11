## Express CRUD Application Api
<p>A simple express application that uses mongodb database,with the payload: 
{ message: String, data: Object } </br>
The app Get's the data created, Updates the data created and Deletes the data created hosted on heroku.

<p>The data you are required to create should contain name, email and country</p>
</p>

### Heroku link
<a href="https://cryptic-basin-88747.herokuapp.com/">https://cryptic-basin-88747.herokuapp.com/</a>

### Task by BUKA
<hr />

# Contents: Quick Refference 🚀
<ol>
  <li>
    <a href="#all">Showing all data</a>
  </li>
   <li>
    <a href="#create">Create data</a>
  </li>
   <li>
    <a href="#show">Show a particular data</a>
  </li>
   <li>
    <a href="#update">Update data</a>
  </li>
   <li>
    <a href="#delete">Delete data</a>
  </li>
</ol>

## SHOW ALL DATA
<p id="all">
  Returns json object of all data created
</p>
<ul>
<li>URL <br/>
 /
</li>
<li>Method  <br/>
 
 ```
  GET
 ```
</li>
<li>URL Params  <br/>
 None
</li>
<li>Data Params  <br/>
 None
</li>
<li>Success Response  <br/>
  <ul><li>Code: 200</li></ul>
  
  ```
    [{
      "message": "Successfully request",
      "data": {
        "_id": "609af04890d3470015e5237f",
        "name": "madax226",
        "email": "madax22@gmail.com",
        "country": "Nigeria",
        "__v": 0
      }
    }]
  
  ```

</li>

<li>Error Response
  <ul><li>Code: 404</li></ul>
  
```
    {
      "message": "error",
      "data": error
    }
 
```
</li>
<li> Simple Call <br/>
  <a href="https://cryptic-basin-88747.herokuapp.com/609af04890d3470015e5237f">All Data</a> 
</li>  
  
</ul>

## CREATE DATA
<p id="create">
  Returns json object of the data created
</p>
<ul>
<li>URL <br/>
 /
</li>
<li>Method  <br/>
  
  ```
  POST
  ```
</li>
<li>URL Params  <br/>
 None
</li>
<li>Data Params  <br/>
 
 ```
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  ```
</li>
<li>Success Response  <br/>
  <ul><li>Code: 200</li></ul>
  
  ```
    {
      "message": "Successfully created a new data",
      "data": {
        "_id": "609af04890d3470015e5237f",
        "name": "madax226",
        "email": "madax22@gmail.com",
        "country": "Nigeria",
        "__v": 0
      }
    }
  
  ```

</li>

<li>Error Response
  <ul><li>Code: 404</li></ul>
  
```
    {
      "message": "ouch, an error occur",
      "data": error
    }
 
```
  </li>
</ul>


## SHOW PARTICULAR DATA
<p id="show">
  Returns json object of the particular data
</p>
<ul>
<li>URL <br/>
 /:id
</li>
<li>Method  <br/>
  
  ```
    GET
  ```
</li>
<li>URL Params  <br/>
  <strong>Required</strong> 
  
  ```
  id=[interger]
  ```
</li>
<li>Data Params  <br/>
 None
</li>
<li>Success Response  <br/>
  <ul><li>Code: 200</li></ul>
  
  ```
    {
      "message": "successfully accessed madax226 data",
      "data": {
        "_id": "609af04890d3470015e5237f",
        "name": "madax226",
        "email": "madax22@gmail.com",
        "country": "Nigeria",
        "__v": 0
      }
    }
  
  ```

</li>

<li>Error Response
  <ul><li>Code: 404</li></ul>
  
```
    {
      "message": "Error occur!!!",
      "data": error
    }
 
```
  </li>
 <li>Simple call <br/>
  <a href="https://cryptic-basin-88747.herokuapp.com/609af04890d3470015e5237f">madax226</a>
 </li>
</ul>

## UPDATE DATA
<p id="update">
  Returns json object of the data updated
</p>
<ul>
<li>URL <br/>
 /
</li>
<li>Method  <br/>
  
  ```
  PUT
  ```
</li>
<li>URL Params  <br/>
  <strong>Required</strong>
  
  ```
  id=[interger]
  ```
</li>
<li>Data Params  <br/>
 
 ```
  name: String,
  email: String,
  country: String
  ```
</li>

<li>Success Response  <br/>
  <ul><li>Code: 200</li></ul>
  
  ```
    {
      "message": "Updated successfully",
      "data": {
        "_id": "609af04890d3470015e5237f",
        "name": "updated-to-max",
        "email": "max@gmail.com",
        "country": "Nigeria",
        "__v": 0
      }
    }
  
  ```

</li>

<li>Error Response
  <ul><li>Code: 404</li></ul>
  
```
    {
      "message": "an error occur, failed to update",
      "data": error
    }
 
```
  </li>
</ul>


## DELETE DATA
<p id="delete">
  Returns json object of the data updated
</p>
<ul>
<li>URL <br/>
 /:id
</li>
<li>Method  <br/>
  
  ```
  DELETE
  ```
</li>
<li>URL Params  <br/>
  <strong>Required</strong>
  
  ```
  id=[interger]
  ```
</li>
<li>Data Params  <br/>
 None
</li>

<li>Success Response  <br/>
  <ul><li>Code: 200</li></ul>
  
  ```
    {
      "message": "Data deleted successfully",
      "data": {
        "_id": "609af04890d3470015e5237f",
        "name": "delete-max",
        "email": "max@gmail.com",
        "country": "Nigeria",
        "__v": 0
      }
    }
  
  ```

</li>

<li>Error Response
  <ul><li>Code: 404</li></ul>
  
```
    {
      "message": "an error occur",
      "data": error
    }
 
```
  </li>
</ul>


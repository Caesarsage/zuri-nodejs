## Express CRUD App Api
### hosted on hero 
<a href="https://cryptic-basin-88747.herokuapp.com/">https://cryptic-basin-88747.herokuapp.com/</a>

### task by BUKA
<hr />
<p>
  Returns json data created
</p>
<ul>
<li>URL <br/>
 <P>/</p>
</li>
<li>Method
 <P>GET</p>
</li>
<li>URL Params
 <P>None</p>
</li>
<li>Success Response
  <li>Code: 200</li>
  ```

  <P>{
      "message": "Successfully created a new data",
      "data": {
        "_id": "609af04890d3470015e5237f",
        "name": "madax226",
        "email": "madax22@gmail.com",
        "country": "Nigeria",
        "__v": 0
      }
    }
  </p>
  ```
</li>

<li>Error Response
  <li>Code: 404</li>
  ```

  <P>{
      "message": "An error occur",
      "data": {}
    }
  </p>
  ```
  </li>
</ul>


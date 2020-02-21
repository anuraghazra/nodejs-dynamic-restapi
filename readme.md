# Nodejs Directory Based APIs

Experiment with nodejs REST API Endpoints, dynamically created endpoints based on directory structure.


Considering this directory structure api endpoints will generate as follows

```
├───api
│   ├───todos
│   │     - index.js
│   ├───users
│   │     - [id].js
│   │     - index.js
```

index.js files are treated as main entrypoint `/` instead of `/index`

By using [filename].js we can make :id params 

- GET /api/todos/
- GET /api/users/:id
- GET /api/users/
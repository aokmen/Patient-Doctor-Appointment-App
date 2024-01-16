for backend
* create "logs" folder
* chanege .env name
* npm i
* nodemon swaggerAutogen.js
* nodemon
for frontend
* chanege .env name
* check BASE_URL=http://127.0.0.1:8000
* npm i
* npm run dev
for CORS
* npm i cors
* add cors code to index.js
```js
  app.use(cors({
    "origin":[ "http://localhost:5173",  "http://localhost:3000"],
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  }))
```
[![Build Status](https://travis-ci.com/emmaodia/coope-api.svg?branch=master)](https://travis-ci.com/emmaodia/houserentportal-api)

## Project Overview
Hackerbay Interview Backend Task

## Heroku deployment
> **[Check it out](https://houserentportal-api.herokuapp.com/)**

## Installation

```
    $ git clone https://github.com/emmaodia/hackerbay-interview-backend.git
    $ cd hackerbay-interview-backend
    $ npm install
```
## Running the application
```
    $ nodemon server.js
```

## Testing
```
    $ npm test
```

## ESLint
```
    $ npm run lint
```

### Endpoints

Method | Endpoint | Functionality
--- | --- | ---
POST | `/login` | Generate a session token to access protected routes
GET | `/thumbnail` | Image Thumbnail Generation. Protected route.
PATCH | `/patch` | JSON patching. Protected route.

### Example Requests
```
    POST http://localhost:5000/login HTTP/1.1
    content-type: application/json
    { "username": "user", "password": "password" }


    GET http://localhost:5000/thumbnail
    { "url" : "https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg" }


    PATCH http://localhost:5000/patch
    {   
        "document": "{ a: 10 }", 
        "patch": "[ { op: 'replace', path: '/a', value: 18, }, { op: 'add', path: '/b', value: [ 0, 2, 3, ], }, ]"
    }   
```

## Credits
I'm grateful to Google <br/> Stack Overflow <br/> MDN <br/> NPM Package registry

## Author
Emmanuel Oaikhenan

## License
Apache-2.0. 2020

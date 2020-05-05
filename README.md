[![Build Status](https://travis-ci.org/emmaodia/hackerbay-interview-Backend.svg?branch=master)](https://travis-ci.org/emmaodia/hackerbay-interview-Backend) [![Coverage Status](https://coveralls.io/repos/github/emmaodia/hackerbay-interview-Backend/badge.svg?branch=master)](https://coveralls.io/github/emmaodia/hackerbay-interview-Backend?branch=master) [![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

## Project Overview
Hackerbay Interview Backend Task

## Heroku deployment
> **[Check it out](https://hackerbay-interview-backend.herokuapp.com/)**

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
## Docker
> **[View Docker Image](https://hub.docker.com/repository/docker/emmaodia/hackerbay-interview-backend/)**

## Swagger Docs
> **[View this Documentation on Swagger](https://app.swaggerhub.com/apis-docs/emmaodia/hackerbay-interview-backend/1.0.0/)**


## Credits
I'm grateful to: <br/> Google <br/> Stack Overflow <br/> MDN <br/> NPM Package registry

## Author
Emmanuel Oaikhenan

## License
Apache-2.0. 2020

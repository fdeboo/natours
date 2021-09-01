# Natours Application

Built using the following main technologies:

![NodeJS](https://img.shields.io/badge/nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=Express&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white)
![Pug](https://img.shields.io/badge/Pug-A86454?style=for-the-badge&logo=Pug&logoColor=white)

## Dependencies

"@babel/polyfill": "",
"babe": "^0.0.1",

### Image handling

- [sharp][sharp] ^0.29.0

  ![sharp](https://img.shields.io/badge/sharp-0.29.0-99cc00?style=for-the-badge&logo=sharp&logoColor=99cc00)

  The typical use case for this high speed Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP and AVIF images of varying dimensions.

### Security Middleware

- [helmet][helmet] ^4.6.0

  Helmet helps you secure your Express apps by setting various HTTP headers. It is a Connect-style middleware, which is compatible with frameworks like Express. The top-level helmet function is a wrapper around 15 smaller middlewares, 11 of which are enabled by default.

- [xss-clean][xss-clean] ^0.1.1

  Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params. Works with Express, Restify, or any other Connect app.

- [cors][cors] ^2.8.5

  Provides a Connect/Express middleware that can be used to enable CORS with various options.

- [express-mongo-sanitize][express-mongo-sanitize] ^2.1.0

  Middleware which sanitizes user-supplied data to prevent MongoDB Operator Injection.

- [express-rate-limit][express-rate-limit] ^5.3.0

  Basic rate-limiting middleware for Express. Limits repeated requests to public APIs and/or endpoints such as password reset.

- [compression][compression] ^1.7.4

  Middleware that compresses text responses. It will attempt to compress response bodies for all request that traverse through the middleware, based on the given options

- [cookie-parser][cookie-parser] ^1.4.5

  Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

- [hpp][hpp] ^0.2.3

  Express middleware to protect against HTTP Parameter Pollution attacks

### Data Modelling

- [bcrypt][bcrypt] ^2.4.3

  A library to help you hash passwords.

- [validator][validator] ^13.6.0

  A library of validators and sanitizers for strings only

- [slugify][slugify] ^1.6.0

  A Javascript package that turns a string into a url slug.

### Frontend

- pug ^3.0.2 (templating)

  A template engine for Node and for the browser. It compiles to HTML but has a simplified syntax. It makes it easy to render data pulled from a database or API

  It compiles the Pug source code into a JavaScript function that takes a data object (called “locals”) as an argument. Call that resultant function with your data, and returns a string of HTML rendered with your data.

### Other

- [![JWT](https://img.shields.io/badge/JWT-8.5.1-000?style=for-the-badge&logo=JSONWebTokens&logoColor=white)][jwt]

  The most common scenario for using JWT is Authorization. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

- [![Stripe](https://img.shields.io/badge/Stripe-8.171.0-008cdd?style=for-the-badge&logo=Stripe&logoColor=008cdd)][stripe]

  payment processing API for e-commerce websites and mobile applications.

- [multer][multer] ^1.4.3

  Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading file inputs.

- [dotenv][dotenv] 10.0.0

  A zero-dependency module that loads environment variables from a .env file into process.env

- [axios][axios] ^0.21.1 (requests from front end to backend api)

  Promise based HTTP client for the browser and node.js

- [nodemailer][nodemailer] ^6.6.3 (sending basic emails)

  Nodemailer is a module for Node.js applications to allow easy as cake email sending. The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.

- [ndb][ndb] ^1.1.5

  Node Debugger is a debugging environment enabled by Chrome DevTools

- [@babel/polyfill][babel] ^7.12.1

  Provides polyfills necessary for a full ES2015+ environment

[axios]: https://www.npmjs.com/package/axios
[babel]: https://www.npmjs.com/package/
[bcrypt]: https://www.npmjs.com/package/bcrypt
[compression]: https://www.npmjs.com/package/compression
[cookie-parser]: https://www.npmjs.com/package/cookie-parser
[cors]: https://www.npmjs.com/package/cors
[dotenv]: https://www.npmjs.com/package/dotenv
[express-mongo-sanitize]: https://www.npmjs.com/package/express-mongo-sanitize
[express-rate-limit]: https://www.npmjs.com/package/express-rate-limit
[helmet]: https://www.npmjs.com/package/helmet
[hpp]: https://www.npmjs.com/package/hpp
[jwt]: https://www.npmjs.com/package/jsonwebtoken
[multer]: https://www.npmjs.com/package/multer
[ndb]: https://www.npmjs.com/package/ndb
[nodemailer]: https://www.npmjs.com/package/nodemailer
[sharp]: https://www.npmjs.com/package/sharp
[slugify]: https://www.npmjs.com/package/slugify
[stripe]: https://www.npmjs.com/package/stripe
[validator]: https://www.npmjs.com/package/validator
[xss-clean]: https://www.npmjs.com/package/xss-clean

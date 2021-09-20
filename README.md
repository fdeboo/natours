# Natours Application

Built using the following main technologies:

![NodeJS](https://img.shields.io/badge/nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=Express&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white)
![Pug](https://img.shields.io/badge/Pug-A86454?style=for-the-badge&logo=Pug&logoColor=white)

## Dependencies

![axios](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/axios?style=for-the-badge)
![@babel/polyfill](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/@babel/polyfill?style=for-the-badge)
![Bcryptjs](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/bcryptjs?style=for-the-badge)
![Compression](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/compression?style=for-the-badge)
![Cookie-parser](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/cookie-parser?style=for-the-badge)
![Cors](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/cors?logo=cors&style=for-the-badge)
![Dotenv](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/dotenv?style=for-the-badge)
![Express](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/express?logo=express&style=for-the-badge)
![Express-mongo-sanitize](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/express-mongo-sanitize?style=for-the-badge)
![Express-rate-limit](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/express-rate-limit?style=for-the-badge)
![Helmet](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/helmet?logo=helmet&style=for-the-badge)
![Hpp](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/hpp?style=for-the-badge)
![jwt](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/jsonwebtoken?logo=jsonwebtokens&style=for-the-badge)
![Multer](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/multer?style=for-the-badge)
![ndb](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/ndb?style=for-the-badge)
![Mongoose](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/mongoose?logo=mongoose&style=for-the-badge)
![Nodemailer](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/nodemailer?style=for-the-badge)
![Pug](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/pug?logo=pug&logoColor=white&style=for-the-badge)
![Sharp](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/sharp?logo=sharp&style=for-the-badge)
![Slugify](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/slugify?style=for-the-badge)
![Stripe](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/stripe?logo=stripe&style=for-the-badge)
![Validator](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/validator?style=for-the-badge)
![Xss-clean](https://img.shields.io/github/package-json/dependency-version/fdeboo/Natours/xss-clean?style=for-the-badge)

### Image handling

- [Sharp][sharp]

  The typical use case for this high speed Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP and AVIF images of varying dimensions.

### Security Middleware

- [Helmet][helmet]

  Helmet helps you secure your Express apps by setting various HTTP headers. It is a Connect-style middleware, which is compatible with frameworks like Express. The top-level helmet function is a wrapper around 15 smaller middlewares, 11 of which are enabled by default.

- [xss-clean][xss-clean]

  Node.js Connect middleware to sanitize user input coming from POST body, GET queries, and url params. Works with Express, Restify, or any other Connect app.

- [cors][cors]

  Provides a Connect/Express middleware that can be used to enable CORS with various options.

- [express-mongo-sanitize][express-mongo-sanitize]

  Middleware which sanitizes user-supplied data to prevent MongoDB Operator Injection.

- [express-rate-limit][express-rate-limit]

  Basic rate-limiting middleware for Express. Limits repeated requests to public APIs and/or endpoints such as password reset.

- [compression][compression]

  Middleware that compresses text responses. It will attempt to compress response bodies for all request that traverse through the middleware, based on the given options

- [cookie-parser][cookie-parser]

  Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

- [hpp][hpp]

  Express middleware to protect against HTTP Parameter Pollution attacks

### Data Modelling

- [bcryptjs][bcrypt]

  A library to help you hash passwords.

- [validator][validator]

  A library of validators and sanitizers for strings only

- [slugify][slugify]

  A Javascript package that turns a string into a url slug.

### Frontend

- [pug][pug]

  A template engine for Node and for the browser. It compiles to HTML but has a simplified syntax. It makes it easy to render data pulled from a database or API

  It compiles the Pug source code into a JavaScript function that takes a data object (called “locals”) as an argument. Call that resultant function with your data, and returns a string of HTML rendered with your data.

### Other

- [jsonwebtoken][jwt]

  The most common scenario for using JWT is Authorization. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

- [Stripe][stripe]

  payment processing API for e-commerce websites and mobile applications.

- [Multer][multer]

  Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading file inputs.

- [Dotenv][dotenv]

  A zero-dependency module that loads environment variables from a .env file into process.env

- [Axios][axios] (requests from front end to backend api)

  Promise based HTTP client for the browser and node.js

- [Nodemailer][nodemailer] (sending basic emails)

  Nodemailer is a module for Node.js applications to allow easy as cake email sending. The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.

- [ndb][ndb]

  Node Debugger is a debugging environment enabled by Chrome DevTools

- [@babel/polyfill][babel]

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

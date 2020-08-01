# A barebones express template built using typescript and mongodb/mongoose
Includes:
- Basic user model with signin/signup endpoints
- Jest testing
- Argon2 authentication
- Eslint configured using airbnb styleguide
- Winston logging

__Note:__ This is a modified (and much more thought through) version of my previous bulletproof express template. Major differences:
- Add typescript
- Switch to using mongoose

The overarching app structure is described here: https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf

## Setup instructions

Copy entire folder and run `npm install` or follow manual instructions below.  The app *should* be runnable after each step
without any further modification.

1. Set up package.json
    
    `npm init`

2. Create project structure

    `mkdir src && touch src/app.js` 
    
    `mkdir src/api src/config src/loaders src/services src/models` 
    

3. Install typescript

    `npm i --save-dev typescript` 
    
    `touch tsconfig.json` 
    
    Copy typescript config file from template 
    
    Add `"start:build": "node dist/app.js"` script to package.json for building 
    

4. Install ts-node-dev for automatic restarts when making changes

    `npm i --save-dev ts-node-dev` 
    
    Add `"start": "tsnd --respawn src/app.ts"` script to package.json 
    

5. Add eslint and prettier for linting, made easy with [this tutorial](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)

    `npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript` 
    
    `npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier` 
    
    Copy `.prettierrc` from this repository 
    
    Copy `.eslintrc.js` from this repository or generate your own with `npx eslint --init`  
    
    Create a `lint` script in the package.json: `"lint": "eslint '*/**/*.{js,ts}' --quiet --fix"` 
    

    __Note__: If you're creating your own, make sure to specifiy the import resolver, typescript and prettier extensions, and the typescript plugin yourself.

6. Add git, .gitignore, README.md and make initial commit

    `git init` 
    
    `touch .gitignore README.md` 
    
    Copy .gitignore from template 
    
    `git commit -m "Initial commit"` 
    

7. Set up .env
    
    `touch .env .env-example` 
    
    `npm i -s dotenv` 
    
    `touch src/config/index.ts` 
    
    Copy config/index.ts from template 
    

8. Set up logger

    `npm i -s winston @types/winston` 
    
    Copy src/loaders/logger.ts from template 
    

9. Set up input validation

    `npm i -s celebrate @types/hapi__joi` 

10. Set up express in app.ts and loader

    `npm i -s express @types/express body-parser cors @types/cors` 
    
    Copy src/app.js from template 
    
    Copy src/loaders/index.ts from template 
    
    Copy src/loaders/express.ts from template 
    
    Copy src/types/ from template 
    

11. Set up Mongo loader

    `npm i -s mongodb @types/mongodb` 
    
    Copy src/loaders/mongo.js from template 
    

    __Note:__ This template assumes you are not connecting to a `run-rs` instance of mongo (sets up full replica set).
    If you would like to use replica sets locally, install with `npm i -g run-rs` and then run with `run-rs --mongod`. You must add the `replicaSet=rs` query to the mongodb url in .env

12. Set up auth endpoints (login, logout, join)

    `mkdir src/api/routes && touch src/api/routes/auth.ts` 
    
    Copy auth.js from template 
    
    `touch models/user.js services/auth.ts` 
    
    Copy user.js and auth.js from template 
    

13. Set up jwt auth middleware and user query middleware

    `npm i -s jsonwebtoken @types/jsonwebtoken express-jwt @types/express-jwt` 
    
    `mkdir src/api/middlewares && touch src/api/middlewares/auth.ts` 
    
    Copy auth.js from template

14. Set up Jest for testing

    `npm i --save-dev jest` 
    
    `touch jest.config.js` 
    
    Copy jest.config.js from template 
    
    Change package.json script to '"test": "jest"'

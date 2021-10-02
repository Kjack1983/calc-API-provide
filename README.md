# Calculator

## Branches
* `master`

# Consuming application
Click here to see the front end application [calculator-front-end](https://github.com/Kjack1983/calculator-front-end)


![calc-API-provide](/screenshots/screenshot.png?raw=true "images")



## Available Scripts

In the project directory, you can run the following commands:

```
"scripts": {
    "start": "npm run prod",
    "build": "npm-run-all clean transpile",
    "server": "node ./dist-server/bin/www",
    "dev": "NODE_ENV=development npm-run-all build server",
    "prod": "NODE_ENV=production npm-run-all build server",
    "transpile": "babel ./server --out-dir dist-server",
    "clean": "rimraf dist-server",
    "watch:dev": "nodemon",
    "test": "NODE_ENV=test npx mocha \"server/**/*.test.js\" --recursive --require @babel/register --file ./server/mocha-setup.js"
}
```


#### `npm install`

```
Install application. 
```

#### `npm start`

```
Runs the app in the development mode. Open http://localhost:3006 to view it in the browser.
Ports is always running at PORT 3006 to avoid conflicts with the front end consuming application [calculator-front-end]. 

```

#### `npm run transpile`

```
place the transpiled contents in a different folder called dist-server in our project root.

```

#### `npm run clean`

```
remove transpiled contents /dist-server/ from the project root.

```

#### `npm run build`

```
combines two processes of transpiling and cleaning content.

```

#### `npm run dev`

```
While having the build script we can run our dev server with the following command above.

```

#### `npm run prod`

```
If we have a dev script that sets the Node Environment to development, we have a prod script that sets it to production.

```

#### `npm run watch:dev`

```
it saves your file whenever localhost:3000 catches any changes.

```

## Tech stack: #babel #nodejs #express
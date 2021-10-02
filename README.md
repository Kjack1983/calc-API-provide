# Calculator

## Branches
* `master`

# Consuming application
[a link](https://github.com/Kjack1983/calculator-front-end)


![calc-API-provide](/screenshots/screenshot.png?raw=true "images")

## Available Scripts

In the project directory, you can run:

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
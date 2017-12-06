# React Components for Recipe Apps

![Build status](https://travis-ci.org/vjwilson/recipe-components.svg?branch=master)

A library of React components created for an online recipe app.

The system for displaying components is based on Cory House’s course[Creating Reusable React Components](https://app.pluralsight.com/library/courses/react-creating-reusable-components) on Pluralsight.

## Install

```
npm install recipe-components
```

## Usage

To import into your own app, after you install, just import the individual components as you would any Node module.

### ES6 style import

```
import Table from 'recipe-components/Table';
import TableHeader from 'recipe-components/TableHeader';
import TableBody from 'recipe-components/TableBody';
```

### Node style require

```
const Table = require('recipe-components/Table').default;
const TableHeader = require('recipe-components/TableHeader').default;
const TableBody = require('recipe-components/TableBody').default;
```

### Importing styled vs. unstyled versions of a component

The components come with some basic styling set by a matching CSS file in each component folder. (E.g., the `Card.js` file has a matching `Card.css` file.)

You can override any of the styles you see fit. However, if you wish to import a component *without* any styles, just import add the filename for the component to the end of your import statement, like this.

```
import Table from 'recipe-components/Table/Table';
```

This is possible because each component is imported into an `index.js` file in its own directory, along with an import of its matching style file, and then re-exported. This makes the styled import look a little cleaner, and it allows you to import just the unstyled component if you wish.

## Docs

See the online [component documentation](http://vjwilson.github.io/recipe-components/), for code examples and a list of props for each component.

## Development

This component library is based on [_create-react-app_](https://github.com/facebookincubator/create-react-app), and modeled on the example component library shown in Cory House's Pluralsight course, [Creating Reusable React Components](https://app.pluralsight.com/library/courses/react-creating-reusable-components).

You can fork this repo, and expand it for your own needs, or just use it as a base for your own component library.

After you fork it, to get all the development dependencies, be sure to run

```
npm install
```

To run the test suite,

```
npm test
```

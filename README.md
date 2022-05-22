# Restaurant Page Project

A mock restaurant website made by rendering pages dynamically with JavaScript modules that are bundled using Webpack.

[Live Demo]()

## Contents

- [Overview](#overview)
- [Setup](#setup)
- [Create Project Folder](#create-project-folder)
- [Webpack Install](#webpack-install)
- [Create Gitignore](#create-a-gitignore)
- [Configure Webpack](#configure-webpack)
- [Create Scripts](#build-script)
- [Bundle CSS](#include-css)
- [Cool CSS Underline Trick]()

## Overview

Theres a navbar at the top. This will appear on every page and so is created in the `index.html` file.

Theres a `div` with a class named `content`. This is where the different pages will be rendered.

There will be three pages for the restaurant page. Each one will be rendered using a JavaScript function. Each of these functions are in there own file / module.

Webpack is used to bundle these files together into the `main.js` file which is used in the `index.html` file.

## Setup

### Create project folder

Create the project folder and go into it:

    $ mkdir project-name

    $ cd project-name

Create the package.json so packages can be installed with npm:

    $ npm init

Use this instead to create a default package.json, it won't prompt you with questions:

    $ npm init -y

### Webpack Install

Install webpack and webpack-cli as dev dependencies:

    $ npm install webpack webpack-cli --save-dev

### Create a gitignore

You can use this to ignore the `node_modules` when pushing to github. The node_modules gets created when any packages are installed, its where the files go.

Create file:

    $ touch .gitignore

Type `node_modules` in it. Anything you type in here will be ignored.

### Create File Structure

Create src/index.js and dist/index.html

    $ mkdir src dist

    $ touch src/index.js dist/index.html

The code that will be compiled by Webpack goes in the `src` directory. The code that will be deployed goes in the `dist` directory. NOTE: Sometimes this is named `build` instead of `dist`.

### Configure Webpack

Create `webpack.config.js` file and put this in it:

    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
      },
    };

This tells webpack to bundle the `src/index.js` and anything that this file imports, into a file named `main.js` and put this file in the `dist` directory.

We put the `main.js` in the `dist/index.html`:

    <script src="main.js"></script>

Put it at the bottom of the `body` section because it references DOM elements and they must be defined before they can be referenced.

### Build Script

To run webpack use this command:

    $ npx webpack

Or add a script to package.json

    "build": "webpack"

Now this command can be run: `$ npm run build`. This will create the bundle.

### Watch Script

To apply changes to your code automatically, you can add:

    "watch": "webpack --watch"

Use with `$ npm run watch`, now changes will update automatically when you save.

This is the same as running `$ npx webpack --watch`.

### Include CSS

Add CSS with webpack [asset management tutorial](https://webpack.js.org/guides/asset-management/)

This will allow you to create CSS files in the src directory that can be imported into the JavaScript files. The CSS styles will be added into the build.

You install the loaders (see the `package.json` for the npm packages to install) and include a rule in the `webpack.config.js` file.

## Cool CSS Underline Trick with :after

This piece of CSS will create a partial underline after the selected element:

    .your-element:after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 50%;
      padding-top: 20px;
      border-bottom: 4px solid #b10017;
    }

:after is a psuedo element.

## Github Pages Host

Use this to create a branch with just the build files for github page hosting.

    $ git subtree push --prefix dist origin gh-pages

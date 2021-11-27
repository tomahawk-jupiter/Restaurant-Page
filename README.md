# Restaurant Page Project

For practicing modules and webpack module bundler.

There will be three pages for the restaurant page. Each one will be rendered using a seperate js file using DOM manipulation.

#### Setup Steps:

1. Setup project folder and npm init.

    $ mkdir \<project-folder\>  

    $ cd \<project-folder\>

    $ npm init

2. Intstall webpack and webpack-cli

    $ npm install webpack webpack-cli --save-dev

3. .gitignore file

    create and type node_modules in it

4. Create src/index.js and dist/index.html

5. Create webpack.config.js file and put in this:

        const path = require('path');

        module.exports = {
          entry: './src/index.js',
          output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
          },
        };

6. Add scripts to package.json

        "build": "webpack"

    To use $ npm run build, or if you don't add this, use $ npx webpack after you have made changes to your code to bundle it again.

    You can add:

        "watch": "webpack --watch"

    And run $ run watch, now changes will update automatically.

7. Add CSS with webpack [asset management tutorial](https://webpack.js.org/guides/asset-management/)


# udacity-image-processing
First project in the Udacity Web Development Advanced Track. 

Objective is to create an API that when visited with a query of a file name, a width, and a height, the API serves that image with the dimensions requested. upon visiting the API again with the same query, the API should return a cached image and not to reprocess the image once more.

## Available Scripts
* `npm install` installs all required modules.

* `npm run dev` runs the nodemon module on 'index.ts'.

* `npm run build` compiles all .ts files to .js in the build folder.

* `npm run start` compiles .ts files and runs index.js in the build folder to start the server.

* `npm run lint` runs ESLint.

* `npm run prettier` runs prettier.

* `npm run test` runs jasmine tests.

## Usage
The server runs on port 3000

#### Endpoint for resizing
http://localhost:3000/api/images

#### Required arguments
* _filename_: Available filenames are:
    * person.jpg
    * monkey.jpg

- _width_: numerical value which should be larger than 0
- height: numerical value which should be larger than 0

#### Example 1
http://localhost:3000/api/images?filename=person&width=100&height=100

Will display a cached image from the thumb folder with a width and a height of 100.

#### Example 2
http://localhost:3000/api/images?filename=monkey&width=200&height=200

Will display an image from the full folder with a width and a height of 200.

### Note
Only .jpg file format works with this API.

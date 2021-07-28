# Image Processing API
## _About this project:_

The project is an image process api that completes the following actions:
- Using a '/post' request will create a resource based on an existing image in the '\images' directory.
- Take the image and resize it and place a 'resized' copy in an '\image\cache' directory.  Any further requests to for an image that matches the name will return the file from the 'cache' and not a new version.

## End Points:
- Post end point to place resize an existing file and place it in the cache:
---   /post/?h=<height>&w=<width>&name=<file in images dir>
GET end point will return an image from the cache if it exists, otherwise an error will be returned.
--- /get/?name=<image name from cache>

## Steps to Start Processes:
Below are the steps to run the various processes for the project, such as linting, starting a dev server, and starting the production server:
1. To lint the project run the following command from the command prompt: ``` npm run lint ```
2. To run prettier execute the following command: ```npm run prettier```
3. To run the unit tests: ```npm t```
4. To run the server in dev mode: ```npm run start:dev```
5. To run a production version: ```npm run start:prod```

## Unit Test Coverage:
The unit tests cover both end points.
'/POST' Tests
The first spec called 'indexSpec.ts' runs 4 tests.  These validates:
- the return code of 302 (redirect in POST request) in one test, 
- looks on the file system on the file system when everything works ok,
- validates that if a file does not exist in the source folder and is run through the post request.  The file will not be created on the fs.
- an image with just '.' will not be created.

'/GET' Tests
These unit tests will confirm the following:
- a successfully create image will have a content-type of 'image/jpeg'
- a file that does not exist in the cache will have an error message.
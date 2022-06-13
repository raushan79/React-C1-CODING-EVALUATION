React Evolution Date : 13/06/2022
Question Link : https://course.masaischool.com/assignments/12108/problem/26335

You will be using JSON server for this particular evaluation. Ref : https://github.com/typicode/json-server

You will be making an e-commerce admin side dashboard ( An e commerce website that deals with clothing and other accessories );

Divide your application into two parts;

ProductForm
ProductListing
Product Form :
This will contain form which will take the following product details from the admin user : title gender price category and image. gender should be a select box with the following options male female atleast. Rest all can be input boxes. for image, you can just paste in any placeholder image link too; that's fine; Here's one placeholder image link if incase you need https://picsum.photos/200

Upon a successful submission of form; A POST request should be made and mock server db.json should be updated with the newly added product details. Also make sure that while pushing the final code to github; your db.json or whatever you have named your .json file exists in the project's repo (.json file should be in main root of project; if you are still confused;that is alongside package.json README.md ...);

Your product should atleast have these details;

"id": ,
"title": ,
"gender": ,
"price": ,
"category":,
"image":
Product Listing :
Once the component mounts; make a network request and list all the products available on the server to UI;

Each Individual product should atleast the following values of product while listing; title gender category price image of product; and delete button, clicking on this delete button should delete the product both on server and it shouldn't be visible on UI as well;

Apply Pagination as well; Each page should contain only 5 products; There should be previous and next button; when user is in first page; you should disable the previous button and when user is in last page; you should disable the next button; Also in between previous button and next button; showcase which page number is the user currently in;

There should be proper message and UI displayed to the user; if it's getting loaded; there should be proper loading message displayed onto UI; there should be proper UI displayed about error message too and so on;

There should be a SORT button which would allow user to sort the products based on their price; this should happen from network request; refer json-server github documentation on how to do this;

There should be a FILTER button which would allow user to filter the products based on gender; if gender is male; only products related to male should be displayed; this should happen from network request; refer json-server github documentation on how to do this;

SORT, FILTER and pagination should work together;

Here is some data to get you started; All the best !

[{
  "id": 1,
  "title": "Bloodworth",
  "gender": "female",
  "price": 3978,
  "category": "saree",
  "image": "https://picsum.photos/200"
}, {
  "id": 2,
  "title": "Tomik",
  "gender": "female",
  "price": 2198,
  "category": "jacket",
  "image": "https://picsum.photos/200"
}, {
  "id": 3,
  "title": "Pauley",
  "gender": "male",
  "price": 933,
  "category": "jacket",
  "image": "https://picsum.photos/200"
}, {
  "id": 4,
  "title": "Edgerley",
  "gender": "female",
  "price": 4286,
  "category": "shirt",
  "image": "https://picsum.photos/200"
}, {
  "id": 5,
  "title": "Featherstonhaugh",
  "gender": "female",
  "price": 2853,
  "category": "shirt",
  "image": "https://picsum.photos/200"
}, {
  "id": 6,
  "title": "Busek",
  "gender": "female",
  "price": 4687,
  "category": "shirt",
  "image": "https://picsum.photos/200"
}, {
  "id": 7,
  "title": "Myrie",
  "gender": "male",
  "price": 2684,
  "category": "shirt",
  "image": "https://picsum.photos/200"
}, {
  "id": 8,
  "title": "Doxey",
  "gender": "male",
  "price": 4727,
  "category": "salwar",
  "image": "https://picsum.photos/200"
}, {
  "id": 9,
  "title": "Ivons",
  "gender": "male",
  "price": 1243,
  "category": "trouser",
  "image": "https://picsum.photos/200"
}, {
  "id": 10,
  "title": "Markel",
  "gender": "male",
  "price": 1353,
  "category": "jacket",
  "image": "https://picsum.photos/200"
}]




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



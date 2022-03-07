# Project Name

Photo Gallery

## Description

This is app is a photo gallery that displays photographs saved within a server. In order to access the server, I created a router and a get route connected to it. The required information is already saved to the gallery.data.js file Then I had to created a gallery list and gallery item. I put props with the body, gallerylist and galleryitem components so that they can access each other.Within the item, I tell the app which columns I want appended to the dom and in what order. The list then maps through the item to create a separate section for each picture with its own image and discription. I also created a put route connected to an update likes function. Whenever the like button is clicked, it updates the number of likes within the server and on the dom. Finally I also created a toggle image function that shows or hides an image whenver you click on the description.

## Technologies

React
Node
Express
Javascript
HTML
CSS

### Setup

There is no database component. All data is stored in an array on the server. Before you get started, add a few images to the `public/images` folder and modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images. Each `id` should be a unique number (e.g. 1, 2, 3...).

Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.

```
npm install
npm run server
npm run client
```

Between the server and client, you'll need two terminal tabs! Because we're using `nodemon`.

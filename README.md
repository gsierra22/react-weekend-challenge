# Project Name

Photo Gallery

## Description
This is app is a photo gallery that displays photographs saved within a server. In order to access the server, I created a router and a get route connected to it. The required information is already saved to the gallery.data.js file Then I had to created a gallery list and gallery item. I put props with the body, gallerylist and galleryitem components so that they can access each other.Within the item, I tell the app which columns I want appended to the dom and in what order. The list then maps through the item to create a separate section for each picture with its own image and discription. I also created a put route connected to an update likes function. Whenever the like button is clicked, it updates the number of likes within the server and on the dom. Finally I also created a toggle image function that shows or hides an image whenver you click on the description.

Technologies used: React, Node, Express, Javascript


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

# Generate a binary matrix grid of an image in JS

## "Why?"

![birds.](img/birdso.gif)


To get the data to generate things like this ( using three.js )!

## What is happening

In the demo.html: an image is pulled from an image, loaded into a canvas, and the image data is processed to reduce RGBA format to a binary value.

This means it will only work with transparent .pngs in this state, but that is easily changed.

What it doesn't do...

- It would also be possible to add a threshold value by using the luminosity formula (0.2126*R + 0.7152*G + 0.0722*B) and selecting an appropriate cut off value
- Work as an unintrusive library that you can pass an image path to, and receive the data back. This is pretty easy, and the only minor hiccup is browser security issues


## Contributing

I couldn't find anything javascript based to do this, if you end up here - Feel free to message or branch if you want to work this into a more sensible/portable library. This is unsuitable for being anywhere near production in the current state.
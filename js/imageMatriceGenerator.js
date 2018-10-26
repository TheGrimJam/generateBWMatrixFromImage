
class targetImage {
    constructor(imageNode){
        this.height = imageNode.offsetHeight;
        this.width = imageNode.offsetWidth;
        this.node = imageNode;
        this.node.crossOrigin = "anonymous";
        this.data = null;
    }

    setData(data){  
        this.data = data.filter(this.convertToBW);
    }

    convertToBW(node){
        return true;
    }
}

class matrixCanvas{
    /* A bit of extra kludge in here incase it's extended to handle multiple images */
    constructor(){
        var image = document.querySelectorAll('*[data-image-target]')[0];
        this.image = new targetImage(image);
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext("2d");
        this.rgbmapping = { r: 0.2126, g: 0.7152, b: 0.0722 }; // Gamma values 

        this.drawImage();
        this.setImageData();
        this.drawImage();
    }

    getCanvas(){
        /* Creates a canvas element and adds it to the DOM */
        this.canvas.id="matrix-canvas";
        this.canvas.width = this.image.width;
        this.canvas.height = this.image.height;
        this.canvas.style.position = "absolute";
        this.canvas.style.display = "none";
        const body = document.getElementsByTagName("body")[0];
        body.appendChild(canvas);
        return canvas;
    }

    clearCanvas(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawImage(){
        this.context.drawImage(this.image.node, 0, 0);
    }

    setImageData(){
        console.log(this.canvas.height, this.image.height);
        console.log(this.canvas.width, this.image.width);
        var imgData = this.context.getImageData(0,0,this.image.width, this.image.height);
        this.image.setData(imgData.data);
        console.log(this.image.data);
        var newImg = new ImageData(this.image.data, this.image.width, this.image.height);
        console.log(newImg);
        this.clearCanvas();
        //this.context.putImageData(newImg, 0, 0);
        console.log(imgData);
    }
}

function main() {
new matrixCanvas();
}
setTimeout(main, 500);
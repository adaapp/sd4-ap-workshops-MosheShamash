class Crop {
    constructor(type, field, x, y) {
        this.type = type
        // Get the image based on the name of the field
        this.image = loadImage('/images/'+type.toLowerCase()+'.png') // ./carrot.png
        this.health = 0
        this.field = field
        this.x = x
        this.y = y
        this.birthstamp = millis() / 1000
        this.width = 1
        this.height = 1
        this.healthySize = 30

        // Draw the crop when it's created
        this.draw()
    }

    getAge() {
        // return the amount of time it's been alive
        return millis() / 1000 - this.birthstamp
    }

    draw() {
        // set a width for the image based on its age
        if (this.getAge() < this.healthySize ) {
            var width = this.width * this.getAge()
            var height = this.height * this.getAge()
        } else {
            var width = 30;
            var height = 30;
        }
 
        image(
            this.image,
            this.x,
            this.y,
            width,
            height
        )
    }
}
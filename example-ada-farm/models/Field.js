class Field {
    constructor(name, health, x, y, width, height) {
        this.name = name
        this.health = health
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.crops = []
    }

    draw() {
        stroke('#7c4011')
        strokeWeight(10)
        fill('#b58969')
        rect(this.x, this.y, this.width, this.height, 10)
        for (var crop of this.crops) {
            crop.draw()
        }
    }

    plant(x, y) {
        console.log('new plant')
        // Get the crop name from the field name
        var cropName = this.name.split(' ') // => e.g. "Wheat"
        // Add a new crop to the field's list of crops
        this.crops.push(new Crop(cropName[0], this, x, y))
    }

    containsPoint(x, y) {
        var top = this.y
        var bottom = this.y + this.height
        var left = this.x
        var right = this.x + this.width

        var isInVerticalRange = y > top && y < bottom
        var isInHorizontalRange = x > left && x < right

        return isInHorizontalRange && isInVerticalRange
    }
}

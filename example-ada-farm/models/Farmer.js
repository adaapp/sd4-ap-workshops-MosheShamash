class Farmer {
    constructor(userName) {
        this.field = null
        this.userName = userName
        this.image = loadImage('/images/farmer.png')
        this.x = 100
        this.y = 100
        this.width = 60
        this.height = 60
    }

    speak(words) {
        alert(words)
    }

    setActiveField(field) {
        this.field = field
    }

    update() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.x = this.x + 3
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.x = this.x - 3
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y = this.y + 3
        }
        if (keyIsDown(UP_ARROW)) {
            this.y = this.y - 3
        }

    }

    farmerKeyPressed() {
        if (keyCode == ENTER) {
            this.field.plant(this.x, this.y)
        }
    }

    draw() {
        var bobAmount = Math.sin(millis() / 60) * 3

        image(
            this.image,
            this.x,
            this.y + bobAmount,
            this.width,
            this.height
        )
    }
} // End of the Farmer class oooarrr

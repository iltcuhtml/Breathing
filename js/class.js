/**
*for making circles
*/
class circle {
    constructor() {                 // /* init circle */
        this.x = canvas.width / 2;  // set circle's x position as the middle of the screen

        this.y = canvas.height
                 - canvas.width / 8
                 - unit;            // set circle's y position as the bottom of the screen

        this.radius = unit / 4;       // set circle's radius

        this.alpha = 1;             // set circle's aplha value as 1
    }

    /**
    *for drawing the circle
    */
    draw() {
        if (!isSVG) {
            /* not drawing svg image */
            ctx.fillStyle = "#D495C0";
    
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();

        } else {
            /* drawing svg image */
            if (elapsed <= inhaleTime) {
                drawRotatedImage(circleImg, 0, 0, 1730, 1730,
                                 this.x, this.y,
                                 this.radius * 2, this.radius * 2,
                                 (elapsed / inhaleTime) * Math.PI - Math.PI * 35 / 180);

            } else if (elapsed <= inhaleTime + exhaleTime) {
                drawRotatedImage(circleImg, 0, 0, 1730, 1730,
                                 this.x, this.y,
                                 this.radius * 2, this.radius * 2,
                                 ((elapsed - inhaleTime) / exhaleTime + 1) * Math.PI - Math.PI * 35 / 180);

            } else {
                drawRotatedImage(circleImg, 0, 0, 1730, 1730,
                                 this.x, this.y,
                                 this.radius * 2, this.radius * 2,
                                 - Math.PI * 35 / 180);
            }
        }
    }

    /**
    *for moving the circle
    */
    move() {
        /* set the circle's x as middle of the screen */
        this.x = canvas.width / 2;

        /* set the circle's radius as unit / 4 */
        this.radius = unit / 4;

        if (elapsed <= inhaleTime) {
            /* moving up */
            this.y = (canvas.height - unit / 4 - unit)
                     - (canvas.height - unit * 2 - unit / 2) * (elapsed / inhaleTime);

        } else if (elapsed <= inhaleTime + exhaleTime) {
            /* moving down */
            this.y = (unit + unit / 4)
                     + (canvas.height - unit * 2 - unit / 2) * ((elapsed - inhaleTime) / exhaleTime);
                     
        } else {
            /* done one cycle */
            /* reset startTime as timeStamp */
            startTime = timeStamp;
            
            /* add one to doneReps */
            doneReps++;

            /* check if one set is done */
            if (doneReps >= setReps) {
                /* add one to doneSets */
                /* reset doneReps as 0 */
                doneSets++;
                doneReps = 0;
            }
        }
    }
};
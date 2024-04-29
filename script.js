// load sponsor images
document.addEventListener("DOMContentLoaded", function () {
    const sponsorsContainer = document.getElementById("marquee");
    const sponsorsContainer2 = document.getElementById("marquee2");


    const numSponsors = 5; // Change the number of sponsors as needed
    const sponsorsFolder = "img/sponsors/"; // Change the folder path as needed

    for (let k = 1; k <= 1; k++) {
        for (let i = 1; i <= numSponsors; i++) {
            const img = new Image();
            img.src = sponsorsFolder + i + ".png";
            img.alt = "sponsor-" + i;
            sponsorsContainer.appendChild(img);
        }
    }
    for (let k = 1; k <= 1; k++) {
        for (let i = 1; i <= numSponsors; i++) {
            const img = new Image();
            img.src = sponsorsFolder + i + ".png";
            img.alt = "sponsor-" + i;
            sponsorsContainer2.appendChild(img);
        }
    }
});


var rightJS = {
    // control speed and direction here;
    multiplier: 0.05,
    // frames per second
    fps: 100,
    lastTime: Date.now(),
    deltaTime: Date.now() - this.lastTime,
    reset: false,

    init: function () {
        rightJS.Tags = document.querySelectorAll('.rightJS');
        for (var i = 0; i < rightJS.Tags.length; i++) {
            rightJS.Tags[i].style.overflow = 'hidden';
        }
        rightJS.Tags = document.querySelectorAll('.rightJS div');
        for (var i = 0; i < rightJS.Tags.length; i++) {
            rightJS.Tags[i].style.position = 'relative';
        }

        var W0 = rightJS.Tags[0].parentElement.offsetWidth;
        var w0 = rightJS.Tags[0].offsetWidth;
        var W1 = rightJS.Tags[1].parentElement.offsetWidth;

        rightJS.Tags[0].style.right = -W0 / 2 + w0 / 2 + 'px';
        rightJS.Tags[1].style.right = -W1 + w0 + 'px';


        rightJS.loop();
        this.lastTime = Date.now();
    },
    onresize: function () {
        // Function logic here
        this.reset = true;
    },
    loop: function () {

        this.deltaTime = Date.now() - this.lastTime;
        this.lastTime = Date.now();

        {
            var x0 = parseFloat(rightJS.Tags[0].style.right);
            var W0 = rightJS.Tags[0].parentElement.offsetWidth;
            var w0 = rightJS.Tags[0].offsetWidth;

            var x1 = parseFloat(rightJS.Tags[1].style.right);
            var W1 = rightJS.Tags[1].parentElement.offsetWidth;
            var w1 = rightJS.Tags[1].offsetWidth;

            if (((x0 > 0) && x0 - w0 > -W0) || (x0 <= -W0) || (x1 > w0)) x1 += this.multiplier * this.deltaTime;
            if (((x1 > w0) && x1 - w1 > -W1 + w0) || ((x1 <= -W1 + w0)) || (x0 > 0)) x0 += this.multiplier * this.deltaTime;

            if (x0 - w0 > 0) x0 = -W0; // 
            if (x1 - w1 - w0 > 0) x1 = -W1 + w0;


            rightJS.Tags[0].style.right = x0 + 'px'
            rightJS.Tags[1].style.right = x1 + 'px'

        }
        if (this.reset) {
            this.reset = false;
            rightJS.init();
        }
        else {
            setTimeout(() => {
                // this.loop();
                requestAnimationFrame(this.loop.bind(this));
            }, 1000 / this.fps);
        }
    }
};

window.addEventListener('load', rightJS.init);
window.addEventListener('resize', (e) => { if (verifyResizeEvent(e)) rightJS.onresize(); });

// ------------------------------------------------------------------------------------------------------------------------------------
/**
 * Width of the window.
 * @type {number}
 */
var gWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
/**
 * Height of the window.
 * @type {number}
 */
var gHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
/**
 * Verifies whether the resize event is triggered by a significant change in window dimensions.
 * This is useful for handling mobile devices where the resize event can be triggered by the appearance or disappearance of the address bar.
 * @param {Event} e - The resize event object.
 * @returns {boolean} True if the resize event is significant, false otherwise.
 */
function verifyResizeEvent(e) {

    if (e.type == 'resize') {

        var tempHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var tempWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (Math.abs(gHeight - tempHeight) > 100 || gWidth != tempWidth) {
            gWidth = tempWidth;
            gHeight = tempHeight;
            return true;
        }
    }
    return false;
};

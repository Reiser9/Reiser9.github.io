$(document).ready(function () {

    LottieInteractivity.create({
        player: '#empowerIcon1',
        mode: 'cursor',
        actions: [
            {
                type: "hover",
                forceFlag: false
            }
        ]
    });

    LottieInteractivity.create({
        player: '#empowerIcon2',
        mode: 'cursor',
        actions: [
            {
                type: "hover",
                forceFlag: false
            }
        ]
    });

    LottieInteractivity.create({
        player: '#empowerIcon3',
        mode: 'cursor',
        actions: [
            {
                type: "hover",
                forceFlag: false
            }
        ]
    });

    LottieInteractivity.create({
        player: '.blockinfo__animation1',
        mode: 'cursor',
        actions: [
            {
                type: "hover"
            }
        ]
    });

    LottieInteractivity.create({
        player: '.blockinfo__animation2',
        mode: 'cursor',
        actions: [
            {
                type: "hover"
            }
        ]
    });

    LottieInteractivity.create({
        player: '.blockinfo2__animation1',
        mode: 'cursor',
        actions: [
            {
                type: "hover"
            }
        ]
    });

    LottieInteractivity.create({
        player: '.blockinfo3__animation1',
        mode: 'cursor',
        actions: [
            {
                type: "hover"
            }
        ]
    });

    LottieInteractivity.create({
        player: '#joinIcon1',
        mode: 'cursor',
        actions: [
            {
                type: "hover"
            }
        ]
    });

    LottieInteractivity.create({
        player: '#joinIcon2',
        mode: 'cursor',
        actions: [
            {
                type: "hover"
            }
        ]
    });

    LottieInteractivity.create({
        player: '#joinIcon3',
        mode: 'cursor',
        actions: [
            {
                type: "hover"
            }
        ]
    });

    // Main text change color
    var $points = $('.main__point');
    var index = 0;

    function toggleActiveClass() {
        $points.removeClass('active');
        $points.eq(index).addClass('active');
        index = (index + 1) % $points.length;
    }

    toggleActiveClass();

    setInterval(toggleActiveClass, 2000);

    // Menu
    $(".header__menu").on("click", function(e){
        e.stopPropagation();
        $(this).toggleClass("active");
        $(".menu__content").toggleClass("active");
    });

    $(document).on("click", function(){
        $(".header__menu").removeClass("active");
        $(".menu__content").removeClass("active");
    });

    $(".menu__content").on("click", function(e){
        e.stopPropagation();
    });

    // FAQ
    $(".faq__item").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else{
            $(".faq__item").removeClass("active");
            $(this).addClass("active");
        }
    });

    // Slider
    $('.road__slider').slick({
		infinite: true,
	  	slidesToShow: 2,
	  	slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '8vw',
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
	});
});

document.addEventListener("DOMContentLoaded", function() {
    const canvases = document.querySelectorAll('.noise');

    canvases.forEach(function(canvas) {
        const ctx = canvas.getContext('2d');
        noise(ctx);
    });

    function noise(ctx) {
        const w = ctx.canvas.width,
            h = ctx.canvas.height,
            iData = ctx.createImageData(w, h),
            buffer32 = new Uint32Array(iData.data.buffer),
            len = buffer32.length;
        let i = 0;

        for (; i < len; i++) {
            if (Math.random() < 0.5) buffer32[i] = 0xffffffff;
        }

        ctx.putImageData(iData, 0, 0);
    }

    (function loop() {
        canvases.forEach(function(canvas) {
            const ctx = canvas.getContext('2d');
            noise(ctx);
        });
        requestAnimationFrame(loop);
    })();
});

class dotGrid {
    constructor(container = "sketch") {
      this.canvasElement = document.getElementById(container);
  
      // Get the device pixel ratio, falling back to 1.
      this.dpr = window.devicePixelRatio || 1;
  
      this.drawable = this.canvasElement.getBoundingClientRect();
  
      this.canvasWidth = this.drawable.width * this.dpr;
      this.canvasHeight = this.drawable.height * this.dpr;
  
      this.canvasElement.width = this.canvasWidth;
      this.canvasElement.height = this.canvasHeight;
  
      this.mouseX = 0;
      this.mouseY = 0;
  
      // Setup Canvas
      this.canvas = this.canvasElement.getContext("2d");
      this.canvas.scale(this.dpr, this.dpr);
    }
  
    onMouseUpdate(e) {
      this.mouseX = e.pageX - this.drawable.left;
      this.mouseY = e.pageY - this.drawable.top;
  
      window.requestAnimationFrame(this.draw.bind(this));
    }
  
    init() {
      window.requestAnimationFrame(this.draw.bind(this));
      // Listen for Mouse updates
      document.body.addEventListener(
        "mousemove",
        this.onMouseUpdate.bind(this),
        false
      );
    }
  
    // Draws the background and calls the function for drawing the dots
    draw() {
      this.canvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.drawDots();
    }
  
    /*
    ((j - this.mouseY) / dist * 4)
    */
  
    // i and j function as x and y when drawing the dot grid.
    drawDots() {
      let size = 1;
      let gridSize = 20;
      for (var i = 2; i < this.canvasWidth / this.dpr / gridSize - 2.5; i++) {
        for (var j = 2; j < this.canvasHeight / this.dpr / gridSize - 2.5; j++) {
          let x = i * gridSize;
          let y = j * gridSize;
          let dist = this.pythag(x, y, this.mouseX, this.mouseY);
          this.canvas.beginPath();
          this.canvas.arc(
            x + (x - this.mouseX) / dist * gridSize,
            y + (y - this.mouseY) / dist * gridSize,
            size,
            size,
            Math.PI,
            true
          );
          this.canvas.fillStyle = "rgba(255, 255, 255, .4)";
          this.canvas.fill();
        }
      }
    }
  
    // Grabs mouse position, checks if the mouse is off the screen (NaN) and calculates the distance from the mouse pointer and each dot using the pythagorean theorem.
    pythag(ellipseX, ellipseY, mouseX, mouseY) {
      let x = mouseX;
      let y = mouseY;
  
      if (x == NaN) {
        return 1;
      } else {
        let leg1 = Math.abs(x - ellipseX);
        let leg2 = Math.abs(y - ellipseY);
        let pyth = Math.pow(leg1, 2) + Math.pow(leg2, 2);
        return Math.sqrt(pyth);
      }
    }
  }
  
  const grid = new dotGrid("sketch");
  grid.init();
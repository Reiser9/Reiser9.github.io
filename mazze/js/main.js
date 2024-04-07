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

// Noise
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
            if (Math.random() < .1) buffer32[i] = 0xffffffff;
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

// Main animation
var c = document.querySelector('.sketch');
var ctx = c.getContext("2d");

window.onresize = resize;
window.addEventListener('mousemove', onMouseMove);

/*-----------------------*/

var dots = [];
var colW = 70;
var lineH = 54;
var nbCols;
var nbLines;
var nbDots;
var mouse = {x: window.innerWidth * 0.5, y: window.innerHeight * 0.5};
var action = {x: window.innerWidth * 0.5, y: window.innerHeight * 0.5};
var zoneRadius;
var zoneStep = 100;

function start(){
    draw();
}

var Dot = function(x, y){
    this.x = x;
    this.y = y;
    this.ax = x;
    this.ay = y;
};

function resize(){
    var box = c.getBoundingClientRect();
    var w = box.width;
    var h = box.height;
    c.width = w;
    c.height = h;
    zoneRadius = c.width * 0.2;
    createDots();
}

function onMouseMove(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

function createDots(){
    var w = c.width;
    var h = c.height;
    nbCols = ~~(w / colW) + 2;
    nbLines = ~~(h / lineH) + 2;
    nbDots = nbCols * nbLines;
    var decalX = -17;
    var decalY = -10;
    dots = [];

    for(var i = 0; i < nbLines; i++) {
        for(var j = 0; j < nbCols; j++) {
            dots.push(new Dot(decalX + j * colW, decalY + i * lineH));
        }
    }
}

function drawDots(anchors, color, radius){
    var dot;
    for(var i = 0; i < nbDots; i++) {
        dot = dots[i];
        dist = getDistance(dot, action);
        ctx.globalAlpha = Math.max(1 - (dist / (zoneRadius * 1.2)), 0);;
        ctx.beginPath();
        if(anchors) {
            ctx.moveTo(dot.ax, dot.ay);
            ctx.arc( dot.ax, dot.ay, radius, 0, Math.PI * 2, true);
        }
        else {
            ctx.moveTo(dot.x, dot.y);
            ctx.arc( dot.x, dot.y, radius, 0, Math.PI * 2, true);            
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
}

function drawLines(color){
    var dot, nextDot, col, lin, dist;
    for(var i = 0; i < nbDots; i++) {
        line = ~~(i / nbCols);
        col = i % nbCols;
        
        dot = dots[i];
        dist = getDistance(dot, action);
        ctx.globalAlpha = Math.max(1 - (dist / (zoneRadius * 1.2)), 0.05);
        ctx.beginPath();
        if(line < (nbLines - 1)){
            nextDot = dots[i + nbCols];
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(nextDot.x, nextDot.y);
        }
        if(col < (nbCols - 1)) {
            nextDot = dots[i + 1];
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(nextDot.x, nextDot.y);
        }
        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}

function drawJoints(color){
    var dot, nextDot, col, lin, dist;
    for(var i = 0; i < nbDots; i++) {
        dot = dots[i];
        dist = getDistance(dot, action);
        ctx.globalAlpha = Math.max(1 - (dist / (zoneRadius * 1.2)), 0.05);
        ctx.beginPath();
        
        ctx.moveTo(dot.x, dot.y);
        ctx.lineTo(dot.ax, dot.ay);
        
        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}

function getDistance(dot1, dot2) {
    return Math.sqrt((dot2.x - dot1.x) * (dot2.x - dot1.x) + (dot2.y - dot1.y) * (dot2.y - dot1.y));
}

function moveDots() {
    var dot, dist, angle;
    for(var i = 0; i < nbDots; i++) {
        dot = dots[i];
        angle = -Math.atan2(action.x - dot.ax, action.y - dot.ay) - (Math.PI * 0.5);
        dist = getDistance(dot, action);
        
        if(dist <= zoneRadius) {
            dot.x = dot.ax + zoneStep * (1 - (dist / zoneRadius)) * Math.cos(angle);
            dot.y = dot.ay + zoneStep * (1 - (dist / zoneRadius)) * Math.sin(angle);
        } 
        else {
            dot.x = dot.ax;
            dot.y = dot.ay;
        }
    }
}

function draw(){
    requestAnimationFrame(draw);
    render();
}

function render(){
    ctx.clearRect(0, 0, c.width, c.height);
    
    action.x += (mouse.x - action.x) * 0.07;
    action.y += (mouse.y - action.y) * 0.07;

    moveDots();
    
    drawLines("rgba(255, 255, 255, .3)");
    drawJoints("#555555");
    
    drawDots(true, "#18a497", 1);
}

resize();
start();
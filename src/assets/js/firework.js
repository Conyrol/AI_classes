// animeJs (动画库)
import anime from 'animejs'

function fireMain(canvasEl, ctx) {
    window.human = false;
    var numberOfParticules = 25;
    var pointerX = 0;
    var pointerY = 0;
    var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
    var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
    
    var canvasEl = canvasEl;
    var ctx = ctx;

    function setCanvasSize() {
        canvasEl.width = window.innerWidth * 2;
        canvasEl.height = window.innerHeight * 2;
        canvasEl.style.width = window.innerWidth + 'px';
        canvasEl.style.height = window.innerHeight + 'px';
        canvasEl.getContext('2d').scale(2, 2);
    }

    function updateCoords(e) {
        pointerX = e.clientX || e.touches[0].clientX;
        pointerY = e.clientY || e.touches[0].clientY;
    }

    function setParticuleDirection(p, value_class) {
        var angle = anime.random(0, 360) * Math.PI / 180;
        var value = anime.random(40, 80);
        var radius = [-1, 1][anime.random(0, 1)] * value;
        return {
            x: p.x + radius * Math.cos(angle),
            y: p.y + radius * Math.sin(angle)
        }
    }

    function createParticule(x, y, color, value) {
        var p = {};
        p.x = x;
        p.y = y;
        if(color) p.color = colors[anime.random(0, colors.length - 1)];
        else p.color = "rgba(84, 92, 100, 0.3)";
        p.radius = anime.random(10, 16);
        p.endPos = setParticuleDirection(p, value);
        p.draw = function() {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
            ctx.fillStyle = p.color;
            ctx.fill();
        }
        return p;
    }

    function renderParticule(anim) {
        for (var i = 0; i < anim.animatables.length; i++) {
            anim.animatables[i].target.draw();
        }
    }

    function animateParticules(x, y, color) {
        var particules = [];
        for (var i = 0; i < numberOfParticules; i++) {
            particules.push(createParticule(x, y, color));
        }
        anime.timeline().add({
            targets: particules,
            x: function(p) { return p.endPos.x; },
            y: function(p) { return p.endPos.y; },
            radius: 0.1,
            duration: anime.random(900, 1200),
            easing: 'easeOutExpo',
            update: renderParticule
        });
        
    }

    var render = anime({
        duration: Infinity,
        update: function() {
            ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        }
    });

    document.addEventListener(tap, function(e) {
        window.human = true;
        render.play();
        updateCoords(e);
        animateParticules(pointerX, pointerY, true, -1);
    }, false);

    function autoClick() {
        // if (window.human) return;
        animateParticules(
            anime.random(20, window.innerWidth - 20), 
            anime.random(70 + 20, window.innerHeight - 20),
            false,
            Math.min(window.innerWidth, window.innerHeight)/10,
        );
        anime({duration: 1500}).finished.then(autoClick);
    }

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize, false);
}

export default fireMain

document.addEventListener("DOMContentLoaded", function () {
    var bigCardContainer = document.getElementById("bigCardContainer");
    var cardScene = document.getElementById("card-scene");
    var bigCard = document.getElementById("bigCard");
    bigCard.addEventListener('click', function (e) {
        cardScene.classList.remove('aparecer');
        e.stopPropagation();
        cardScene.classList.add('desaparecer');
        bigCard.classList.add('card--unflip');
        setTimeout(function () {
            bigCard.classList.remove('card--flipped', 'card--unflip');
        }, 500);
        setTimeout(function () {
            cardScene.classList.remove('desaparecer');
            bigCardContainer.classList.add('hide');
        }, 400);
    });

    var cards = document.getElementsByClassName('card-item');
    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        element.addEventListener('click', function (e) {
            e.stopPropagation();
            var bigCard = document.getElementById("bigCard");
            var cardScene = document.getElementById("card-scene");
            var bigCardFront = document.getElementById("bigCardFront");
            bigCardFront.src = element.src;

            cardScene.classList.remove('desaparecer');
            var bigCardContainer = document.getElementById("bigCardContainer");
            bigCardContainer.classList.remove('hide');
            cardScene.classList.add("aparecer");
            bigCard.classList.add("card--flipped");
            setTimeout(function () {
                cardScene.classList.remove('aparecer');
            }, 400);
        });
    };


    (function () {
        // Init
        var container = document.getElementById("card-scene");
        var inner = document.getElementById("cardElement");

        // Mouse
        var mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function (event) {
                var e = event || window.event;
                this.x = e.clientX - this._x * -1;
                this.y = (e.clientY - this._y);
            },
            setOrigin: function (e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
            },
            show: function () {
                return "(" + this.x + ", " + this.y + ")";
            }
        };

        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(container);

        //-----------------------------------------

        var counter = 0;
        var updateRate = 10;
        var isTimeToUpdate = function () {
            return counter++ % updateRate === 0;
        };

        //-----------------------------------------

        var onMouseEnterHandler = function (event) {
            update(event);
        };

        var onMouseLeaveHandler = function () {
            inner.style = "";
        };

        var onMouseMoveHandler = function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };

        //-----------------------------------------

        var update = function (event) {
            mouse.updatePosition(event);
            let mouseInnerY = mouse.y-container.offsetTop;
            let mouseInnerX = mouse.x-container.offsetLeft;

            mouseInnerY = mouseInnerY > container.offsetHeight/2 ? (container.offsetHeight - mouseInnerY) : mouseInnerY;
            mouseInnerX = mouseInnerX > container.offsetWidth/2 ? (container.offsetWidth - mouseInnerX) : mouseInnerX;
            
            let degY = ((mouseInnerY/container.offsetHeight)-1)/5;
            let degX = ((mouseInnerX/inner.offsetWidth)-1)/5;

            if(mouse.y-container.offsetTop > container.offsetHeight/2){
                // Q1
                degX = degX*(-1);
                if(mouse.x-container.offsetLeft < container.offsetWidth/2){
                    // Q2
                    degY = degY*(-1);
                }
            }else{
                // Q3
                if(mouse.x-container.offsetLeft < container.offsetWidth/2){
                    // Q4
                    degY = degY*(-1);
                }
            }
            updateTransformStyle(
                degX,degY
            );
        };

        var updateTransformStyle = function (x, y) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;
            inner.style.webkitTransform = style;
            inner.style.mozTransform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
        };

        //-----------------------------------------

        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;
    })();



});

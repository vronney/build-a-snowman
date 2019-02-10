// Created a protective name space
var dragndrop = (function() {
    var myX = '';
    var myY = '';
    var whichArt = '';

    function resetZ() { // will allow to items to be placed on top of each other - changing z-index from 5 to 10
        var elements = document.querySelectorAll('img');
        for (var i = elements.length - 1; i >= 0; i--) {
            elements[i].style.zIndex = 5;
        };
    }

    function moveStart(e) {
        whichArt = e.target;
        myX = e.offsetX === undefined ? e.layerX : e.offsetX;
        myY = e.offsetY === undefined ? e.layerY : e.offsetY;
        resetZ();
        whichArt.style.zIndex = 10;
    }

    function moveDragOver(e) {
        e.preventDefault();
    }

    function moveDrop(e) {
        e.preventDefault();
        whichArt.style.left = e.pageX - myX + 'px';
        whichArt.style.top = e.pageY - myY + 'px';
    }

    function touchStart(e) {
        e.preventDefault();
        var whichArt = e.target;
        var touch = e.touches[0];
        var moveOffSetX = whichArt.offSetLeft - touch.pageX;
        var moveOffSetY = whichArt.offSetTop - touch.pageY;
        resetZ();
        whichArt.style.zIndex = 10;

        whichArt.addEventListener('touchmove', function() {
            var positionX = touche.pageX+moveOffSetX;
            var positionY = touche.pageY + moveOffSetY;
            whichArt.style.left = positionX + 'px';
            whichArt.style.top  = positionY + 'px';
        }, false);
    }

    document.querySelector('body').addEventListener('dragstart', moveStart, false);
    document.querySelector('body').addEventListener('dragover', moveDragOver, false);
    document.querySelector('body').addEventListener('drop', moveDrop, false);
    document.querySelector('body').addEventListener('touchstart', touchStart, false);    
})();
$(document).ready(function () {

    // Mouse backgroung
    $('.callback-bg, .about-dots_img').on('mousemove', function(e){
        var amountMovedX = (e.pageX * -1 / 12);
        var amountMovedY = (e.pageY * -1 / 12);
        $(this).css('transform', 'translateX('+ amountMovedX + 'px) ' + 'translateY('+ amountMovedY + 'px)');
    });
    // Mouse steps mask
    $('body').on('mousemove', function(e){
        var amountMovedX = (e.pageX * -1 / 12);
        var amountMovedY = (e.pageY * -1 / 12);
        $('.about-dots_img').css('transform', 'translateX('+ amountMovedX + 'px) ' + 'translateY('+ amountMovedY + 'px)');
        $('.steps-title__pram > img').css('transform', 'translateY('+ amountMovedY + 'px)');
        $('.about-title .mask').css('transform', 'translateY('+ amountMovedY + 'px)');
    });
    $('.advanture-content').on('mousemove', function(e){
        $('.advanture-content').addClass('icon-hide');
        $(this).removeClass('icon-hide');
    });
    $('.advanture-content').on('mouseout', function(e){
        $('.advanture-content').removeClass('icon-hide');
    });


    let icon1 = document.querySelector('.icon-1');
    //animation('', icon1, 600);

    function animation(args, elem, rad) { // некоторые аргументы определим на будущее
        var $ = {
            radius  :     rad, // радиус окружности
            speed   :     20 // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
        }
        var f = 0;
        var s = 2 * Math.PI / 180; //Вычислим угол
        f += s; // приращение аргумента
        elem.style.left =  235 + $.radius * Math.sin(f)  + 'px'; // меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат. Правда, в данном случае используется полярная система координат, изменяя угол
        elem.style.top =   235 + $.radius * Math.cos(f) + 'px';
    }

});
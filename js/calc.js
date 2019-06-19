document.addEventListener('DOMContentLoaded', initCalc);
function initCalc() {
    $(".videotime").ionRangeSlider({
        skin: "round",
        postfix: " мин",
        onChange: function (data) {
            priceSetting.min = data.from;
            calc();
        }
    });
    $('.hoursLine').ionRangeSlider({
        skin: "round",
    });
    $('.aeroslider').ionRangeSlider({
        skin: "round",
    });
    $('.stylistslider').ionRangeSlider({
        skin: "round",
    });
    $('.grimerslider').ionRangeSlider({
        skin: "round",
    });
    $('.infograficslider').ionRangeSlider({
        skin: "round",
    });
    // Setting calculator
    const   priceSetting = {
        min: 10,
        // Сценарий
        scenario: 5000,
        // Закадровый текст
        narration: 2500,
        // Раскадровка
        storyboard: 8000,
        // Оператор
        operator: {
            // Час
            hour: 3500,
            // Смена
            smena: 28000
        },
        // Операторская группа
        operatorGroup: {
            // Час
            hour: 8000,
            // Смена
            smena: 54000
        },
        // Съемочная группа
        filmcrew: {
            // Смена
            smena: 92000
        },
        // Аэросъемка
        aerialsurvey: 3500,
        // Гример
        makeup: 2000,
        // Стилист
        stylist: 3000,
        // Монтаж
        videoediting: {
            // 1 - 3
            small: 5000,
            // 3 - 7
            medium: 8000,
            // 7 - 10
            large: 10000,
            // 10 - 12
            extra: 12000
        },
        // Цветокор
        colorpicker: 4000,
        // Инфографика
        infografika: 10000,
        //Саунддизайн
        sound: 4000,
        // Диктор
        dictor: 1500,
        // Итого
        total: 0
    };
    const   idea            = $('#idea'),
            scenarii        = $('#scenarii'),
            frametext       = $('#text'),
            frames          = $('#frames'),
            location        = $('#location'),
            hours           = $('#hours'),
            smena           = $('#smena'),
            operator        = $('#operator'),
            opergroup       = $('#opergroup'),
            videogroup      = $('#videogroup'),
            aerorec         = $('#aerorec'),
            montag          = $('#montag'),
            colorpicker     = $('#colorpicker'),
            infografic      = $('#infografic'),
            grafic          = $('#grafic'),
            sounddesign     = $('#sounddesign'),
            musiclicence    = $('#musiclicence'),
            voice           = $('#voice');

    function calc() {
        $('#priceVal').text(priceSetting.total);
    }


    scenarii.on('click', function () {
        $(this).is(":checked")?priceSetting.total+=priceSetting.scenario*priceSetting.min:priceSetting.total-=priceSetting.scenario*priceSetting.min;
        calc();
    });
    frametext.on('click', function () {
        $(this).is(":checked")?priceSetting.total+=priceSetting.narration:priceSetting.total-=priceSetting.narration;
        calc();
    });
    frames.on('click', function () {
        $(this).is(":checked")?priceSetting.total+=priceSetting.storyboard:priceSetting.total-=priceSetting.storyboard;
        calc();
    });
    operator.on('click', function () {
        if (hours.is(":checked") === false && smena.is(":checked") === false){
            alert('Выбери тип оплаты');
        }
        if (hours.is(":checked") === true){
            $(this).is(":checked")?priceSetting.total+=priceSetting.operator.hour:priceSetting.total-=priceSetting.operator.hour;
        }
        if (smena.is(":checked") === true){
            $(this).is(":checked")?priceSetting.total+=priceSetting.operator.smena:priceSetting.total-=priceSetting.operator.smena;
        }
    })
}

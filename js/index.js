

$(window).on('load', function () {
    setTimeout(function () {
        $('#loader').removeClass('loading');
        $('#loader').addClass('loaded');
        $('body').addClass('dom-is-loaded');
        boxElement = $(".pr-each");
        Array.prototype.forEach.call(boxElement, function (f) {
            $(window).scroll(function (e) {
                if (window.pageYOffset > $(f).offset().top - 250) {
                    $(f).addClass('show-each-section')
                }

            })
        })

    }, 1000);
})

function textSplitReady() {
    var txt = $('.text-split').text().split('').map(function (e) { return `<span class="text-split-main" data-txt="${e}"><span>${e}</span></span>` });
    txt.join();
    $('.text-split').html('');
    $('.text-split').html(txt)

    $('.header-text').hover(function () {
        $('body').addClass('changeMouse')
    }, function () {
        $('body').removeClass('changeMouse')
    })

}

function haederStick() {
    $('.header-text .text-split-main').hover(function () {
        $(this).find('span').addClass('tsm-hvd');
    }, function () {
        $(this).find('span').removeClass('tsm-hvd');
    })
}

$(document).ready(function () {
    window.scrollTo(0, 0)
    textSplitReady();
    haederStick();
})


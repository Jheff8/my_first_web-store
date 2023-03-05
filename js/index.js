$('div.layout p:first').css('margin', '40px 0px')
$('div.layout p:last').css('margin-top', '30px').css('margin-bottom', '20px')

$(window).on('load',function(){
    const currentPathName = $(location).prop('pathname')
    if( currentPathName == '/web_store/index.html' ) {
        $('#homeOpt').removeClass('hover').css('border-bottom', '1px solid rgba(25, 29, 38, .9')
    }else if ( currentPathName == '/web_store/shop.html' ) {
        $('#shopOpt').removeClass('hover').css('border-bottom', '1px solid rgba(25, 29, 38, .9')
    }else if ( currentPathName == '/web_store/about.html' ) {
        $('#aboutOpt').removeClass('hover').css('border-botom', '1px solid rgba(25, 29, 38, .9)')
    }
})

$('.bi').on('click', function(){
    $('.menu').slideToggle({start: function(){
    $('.bi').toggleClass('bi-list bi-x')
    }})
})

$('.menuOpts').on('click', (function(){
    $('.menuOpts').addClass('hover').css('border-bottom', 'none')
    $(this).removeClass('hover').css('border-bottom', '1px solid rgba(25, 29, 38, .9)')
}))
        
$(document).on('mouseenter', '.hover', function(){
    $(this).css('border-bottom', '1px solid rgba(25, 29, 38, .9)')
})
$(document).on('mouseleave', '.hover', function(){
    $('.hover').css('border-bottom', 'none')
})

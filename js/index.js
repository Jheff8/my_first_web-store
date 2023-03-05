$('div.layout p:first').css('margin', '40px 0px')
$('div.layout p:last').css('margin-top', '30px').css('margin-bottom', '20px')

$('.selected').css('border-bottom', '1px solid rgba(25, 29, 38, .9)')

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

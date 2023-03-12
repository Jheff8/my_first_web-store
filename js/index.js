$('div.layout p:first').css('margin', '40px 0px')
$('div.layout p:last').css('margin-top', '30px').css('margin-bottom', '20px')

$(window).on('load', function(){
    $('.selected').css('border-bottom', '2px solid rgba(25, 29, 38, .9)')
})

$('.bi').on('click', function(){
    $('.menu').slideToggle({start: function(){
    $('.bi').toggleClass('bi-list bi-x')
    }})
})

$('.menuOpts').on('click', (function(){
    $('.menuOpts').addClass('hover').css('border-bottom', 'none')
    $(this).removeClass('hover').css('border-bottom', '2px solid rgba(25, 29, 38, .9)')
}))
        
$(document).on('mouseenter', '.hover', function(){
    $(this).css('border-bottom', '2px solid rgba(25, 29, 38, .9)')
})
$(document).on('mouseleave', '.hover', function(){
    $('.hover').css('border-bottom', 'none')
})

$('#telephone').on('click', function(event){
    var text = $(this).text()
    navigator.clipboard.writeText(text).then(function() {
    alert('Copied text!')
    })
})

$('#minus-btn').on('click', function(){
    let value = $('.quantity-value').text()
    if ( value >= 2 ){
        --value
        $('.quantity-value').text(value)
    }
})
$('#plus-btn').on('click', function(){
    let value = $('.quantity-value').text()
    ++value
    $('.quantity-value').text(value)
})

var timeoutId
$('#add-bag').on('click', function(){
    $('.warning-block').fadeIn().css('display', 'flex')
    clearTimeout(timeoutId)
    timeoutId = setTimeout(function(){
        $('.warning-block').fadeOut()
    }, 5000)
})
$('.close-warning').on('click', function(){
    $('.warning-block').fadeOut()
    clearTimeout(timeoutId)
})
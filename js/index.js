$('div.layout p:first').css('margin', '40px 0px')
$('div.layout p:last').css('margin-top', '30px').css('margin-bottom', '20px')

$(window).on('load', function(){
    $('.selected').css('border-bottom', '2px solid rgba(25, 29, 38, .9)')
})

$('.navBtn').on('click', function(){
    $('.menu').slideToggle({start: function(){
    $('.navBtn').toggleClass('bi-list bi-x')
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

let timeoutId
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
const productsInformation = [
    {name: '12059 DigiCam', value: '840.00', image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=392,h=392,fit=crop,q=100/cdn-ecommerce/store_01G0FTHP1QA7N17Y1TBRKEH7C2/assets/1649798645270-1424746861.png'},
    {name: 'In-ear Headphones', value: '179.95', image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=984,fit=crop,q=100/cdn-ecommerce/store_01G0FTHP1QA7N17Y1TBRKEH7C2%2Fassets%2F1649798887631-1424750442.png'},
    {name: 'Safa RH16 Smart Speaker', value: '75.00', image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=984,fit=crop,q=100/cdn-ecommerce/store_01G0FTHP1QA7N17Y1TBRKEH7C2%2Fassets%2F1649798619495-1424746707.png'},
    {name: 'Safa-Silence Sound Cancellation Headphones', value: '230.00', image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=984,fit=crop,q=100/cdn-ecommerce/store_01G0FTHP1QA7N17Y1TBRKEH7C2%2Fassets%2F1649798850860-1424750232.png'},
    {name: 'Safa-VR Headset', value: '940.00', image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=984,fit=crop,q=100/cdn-ecommerce/store_01G0FTHP1QA7N17Y1TBRKEH7C2%2Fassets%2F1649798682136-1424747667.png'},
    {name: 'WBEZ Portable Speaker', value: '100.00', image: 'https://cdn.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=984,fit=crop,q=100/cdn-ecommerce/store_01G0FTHP1QA7N17Y1TBRKEH7C2%2Fassets%2F1649798759729-1424749215.png'}
]
var elementNum
$('.product').on('click', function(){
    switch ($(this).find('div:first').attr('id')) {
        case 'img1':
            saveInStorage('0')
            break
        case 'img2':
            saveInStorage('1')
            break
        case 'img3':
            saveInStorage('2')
            break
        case 'img4':
            saveInStorage('3')
            break
        case 'img5':
            saveInStorage('4')
            break
        case 'img6':
            saveInStorage('5')
            break
    }
})
function saveInStorage(productNum){
    const currentProduct = productsInformation[productNum]
    localStorage.setItem('product-img', `${currentProduct.image}`)
    localStorage.setItem('product-name', `${currentProduct.name}`)
    localStorage.setItem('product-price', `${currentProduct.value}`)
    loadProductPage()
}
function loadProductPage(){
    window.location.href = 'product.html'
}
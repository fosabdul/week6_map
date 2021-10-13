//alert('is thisf working?')
// this didn't work for me
// when I disable the input = true it is only showing the image 

let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

let input = document.querySelector('image-text')
// input.disable = true

let image = new Image()

image.src = 'surrey-peacocks.jpg'

image.addEventListener('load', function(){
    context.drawImage(image, 0, 0)
    input.disable = false
})

input.addEventListener('input', function(){
    let text = this.value
    context.fillStyle = 'black'
    context.font = '40px Courier'
    context.drawImage(image, 0, 0)
    context.fillText(text, 100, 470)
})
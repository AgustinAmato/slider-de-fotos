const imgArray =[
    './img/ricardo.jpg',
    './img/bajo.jpg' ,
    './img/catriel.jpg',
    './img/fotolostres.jpg'
]

const img = document.querySelector('#slide')

let i =0;

const slideShow = () =>{
    img.src = imgArray[i]
    i = (i < imgArray.length - 1) ? i+1 :0
}

const interval =() => {
    setInterval (slideShow, 1000)
}

























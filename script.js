let elJami = document.querySelector('#jami')
let elPrice = document.querySelector('#price');
let elHi = document.querySelector('#hi');
let elIncreaseBtn = document.querySelector('#increase');
let elDecreaseBtn = document.querySelector('#decrease');
let elCounter = document.querySelector('#count');
let elDeleteBtn = document.querySelector('#del-btn');


elIncreaseBtn.addEventListener('click', function(){
    elCounter.textContent = elCounter.textContent-1
        elPrice.textContent = elPrice.textContent-2000
        elJami.textContent = elJami.textContent-2000
if(elJami.textContent <= 0){
        elJami.textContent = 0
    }
    if(elPrice.textContent <= 0){
        elPrice.textContent = 0
    }

    if(elCounter.textContent <= 0)(
        elCounter.textContent = 0
        )
    })
    
    elDecreaseBtn.addEventListener('click', function(){
        elCounter.textContent = +elCounter.textContent+1
        elPrice.textContent = +elPrice.textContent+2000
        elJami.textContent = +elJami.textContent+2000
    })

    elDeleteBtn.addEventListener('click', function(){
        elHi.classList.add('hidden')
         elJami.textContent = 0

    })

    // /2

    let elPrice2 = document.querySelector('#price2');
let elHi2 = document.querySelector('#hi2');
let elIncreaseBtn2 = document.querySelector('#increase2');
let elDecreaseBtn2 = document.querySelector('#decrease2');
let elCounter2 = document.querySelector('#count2');
let elDeleteBtn2 = document.querySelector('#del-btn2');


elIncreaseBtn2.addEventListener('click', function(){
    elCounter2.textContent = elCounter2.textContent-1
        elPrice2.textContent = elPrice2.textContent-2000
        elJami.textContent = elJami.textContent-2000
      if(elJami.textContent <= 0){
        elJami.textContent = 0
    }

    if(elPrice2.textContent <= 0){
        elPrice2.textContent = 0
    }

    if(elCounter2.textContent <= 0)(
        elCounter2.textContent = 0
        )
    })
    
    elDecreaseBtn2.addEventListener('click', function(){
        elCounter2.textContent = +elCounter2.textContent+1
        elPrice2.textContent = +elPrice2.textContent+2000
        elJami.textContent = +elJami.textContent+2000

    })

    elDeleteBtn2.addEventListener('click', function(){
        elHi2.classList.add('hidden')
         elJami.textContent = 0

    })

// 3

    let elPrice3 = document.querySelector('#price3');
let elHi3 = document.querySelector('#hi3');
let elIncreaseBtn3 = document.querySelector('#increase3');
let elDecreaseBtn3 = document.querySelector('#decrease3');
let elCounter3 = document.querySelector('#count3');
let elDeleteBtn3 = document.querySelector('#del-btn3');


elIncreaseBtn3.addEventListener('click', function(){
    elCounter3.textContent = elCounter3.textContent-1
        elPrice3.textContent = elPrice3.textContent-2000
        elJami.textContent = elJami.textContent-2000
     if(elJami.textContent <= 0){
        elJami.textContent = 0
    }

    if(elPrice3.textContent <= 0){
        elPrice3.textContent = 0
    }

    if(elCounter3.textContent <= 0)(
        elCounter3.textContent = 0
        )
    })
    
    elDecreaseBtn3.addEventListener('click', function(){
        elCounter3.textContent = +elCounter3.textContent+1
        elPrice3.textContent = +elPrice3.textContent+2000
        elJami.textContent = +elJami.textContent+2000

    })

    elDeleteBtn3.addEventListener('click', function(){
        elHi3.classList.add('hidden')
         elJami.textContent = 0
    })

    
    


    

    
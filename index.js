
//  FOOD CARDS

let foodCards = document.getElementsByClassName('food-card');
let link = document.getElementsByClassName('card-link');
let cards = [];


// DISH CARDS
let dishCards = document.getElementsByClassName('dish');
let dishImages = document.getElementsByClassName('dish-img');
let dishes = [];

// SLIDER
let slider = document.getElementById('slider');


// ADDING ALL CARDS IN A ARRAY TO GET INDEX NUMBER
for (let card of foodCards){
    cards.push(card);
   
}
// ADDING MOSUEOVER EVENT.
for(let card of cards){
    let index = cards.indexOf(card);
    card.addEventListener('mouseover', ()=>{
        link[index].classList.add('a-active');
    })
}
// ADDING MOUSEOUT IVENT
for(let card of cards){
    let index = cards.indexOf(card);
    card.addEventListener('mouseout', ()=>{
        link[index].classList.remove('a-active');
    })
}

// DISH CARD
//  ADDING ALL CARDS IN A ARRAY
for(let card of dishCards){
    dishes.push(card);
}

//ADDING MOUSEOVER EVENT
for(let ele of dishes){
    let index = dishes.indexOf(ele)
    ele.addEventListener('mouseover', ()=>{
        dishImages[index].classList.add('img-hover');
    })
}
// MOUSE OUT
for(let ele of dishes){
    let index = dishes.indexOf(ele)
    ele.addEventListener('mouseout', ()=>{
        dishImages[index].classList.remove('img-hover');
    })
}
if(window.matchMedia("(max-width: 750px)").matches){
    for(let ele of cards){
        ele.style.width = "60vw";
    }
    document.querySelector('.food-card-wraper').style.justifyContent = "center"
}
if(window.matchMedia("(max-width: 480px)").matches){
    
    let index = 1;
slide(index);
// Slide
function slide(n){
    if(n<1){
        n = dishCards.length ;
    }
    else if(n>dishCards.length){ n = 1;}
    

    for(let i=0; i<dishCards.length; i++){
        dishes[i].classList.add('hide');
    }
    
    dishes[n-1].classList.remove('hide');
    setTimeout(() => {
        slide(n+1)

    }, 5000);
}
}
else if(window.matchMedia("(max-width: 895px)").matches){
    for(let ele of cards){
        ele.style.margin = "1.5rem"
    }
    let rate = document.getElementsByClassName('rate');
    for(let ele of rate){
        
        ele.style.right ="7rem";
    }
    let index = 2;
    slide(index);
    function slide(n){
        if(n<2){
            n = dishCards.length-2 ;
        }
        else if(n>dishCards.length){ n = 2;}
        
        for(let i=0; i<dishCards.length; i++){
            dishes[i].style.width = "38%"
            dishes[i].classList.add('hide');
        }
        
        dishes[n-2].classList.remove('hide');
        
        dishes[n-1].classList.remove('hide');
        
        setTimeout(() => {
            slide(n+1)
        }, 2000);
    }
    
}
else{
    let index = 3;
    slide(index);
    // Slide
    function slide(n){
        let min = 0;
        if(n<1){
            min = dishCards.length-3 ;
        }
        else if(n>dishCards.length){ n = 3;}
        else if(n>3){
            min = n-3;
        }
    
        for(let i=0; i<dishCards.length; i++){
            dishes[i].classList.add('hide');
        }
        
        dishes[min].classList.remove('hide');
        
        dishes[min+1].classList.remove('hide');
        dishes[min+2].classList.remove('hide');
        
        setTimeout(() => {
            slide(n+1)
        }, 2000);
    }
    }
    


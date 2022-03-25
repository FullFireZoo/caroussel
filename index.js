const right = document.querySelector('.right')
const left = document.querySelector('.left')
const clique = Array.from(document.querySelectorAll('li'))


let i= 0;
right.addEventListener('click',(e)=>{
    
    console.log(clique.length);
    console.log(i);
    console.log(i>clique.length);
    clique[i].style.display = 'none'
    clique[i+4].style.display = 'flex'
    i++
    if(i+4>= clique.length){
        clique.forEach((element, j)=>{
            if(j>=4)
            {  
               clique[j].style.display ='none';
            }else {clique[j].style.display ='flex';}
        })
        i=0
    }

});

left.addEventListener('click',(e)=>{
    
    console.log(clique.length);
    console.log(i);
    console.log(i>clique.length);
    clique[i].style.display = 'flex'
    clique[i-4].style.display = 'none'
    i--
    if(i-4<= 0){
        clique.forEach((element, j)=>{
            if(j>=4)
            {  
               clique[j].style.display ='flex';
            }else {clique[j].style.display ='none';}
        })
        i=clique.length
    }

})
let count = 0;

let countIncrement = document.querySelector('#increment')
countIncrement.addEventListener('click',function(){
    counterApp(1)
})

let countDecrement = document.querySelector('#decrement')
countDecrement.addEventListener('click',function(){
    if(count > 0)
    counterApp(-1)
})


function counterApp(num){
    count = count + num;
    document.querySelector("#count").innerText = count;
    // console.log(typeof dataType)
    
}



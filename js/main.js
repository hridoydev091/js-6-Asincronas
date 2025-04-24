// ------------------------asincronas

console.log("hello");
console.log("hello2");
setTimeout(() => {
    for (let i = 0;i <=20; i++){// asincronas ta pore output dibe
        console.log(i);
    }
    console.log('after 2 second pore settimer bitor ja ache ta asbe asbe');
    
},2000)
console.log('end3');

//-----------------sincronas------way


function one() {
    console.log('one');
    setTimeout(() => {
        console.log('eita hoilo asincronas');// eita holo asincronas
        
    }, 1000);
}

function two() {
    console.log('two');
}

function three() {
    console.log('three');
}

function four() {
    console.log('four');
    setTimeout(() => {
        console.log('Popup opnen');// eita holo asincronas
        
    }, 2000);
}

four();
two();
one();
three();

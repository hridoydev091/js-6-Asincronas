// ------------------------asincronas

console.log("hello");
console.log("hello2");
setTimeout(() => {
    for (let i = 0;i <=5; i++){// asincronas ta pore output dibe
        console.log(i);
    }
    console.log('after 2 second pore settimer bitor ja ache ta asbe asbe');
    
},200)
console.log('end3');


function redy() {
    setTimeout(() => {
        console.log('redy hoilo asincronas');
    }, 1000);
}



//--------------------------sincronas----------------------way


function video() {
    setTimeout(() => {
        console.log('video arrive');
    }, 1000);
}

function two() {
    console.log('two');// eita hoilo sincronas
}

function three() {
    console.log('three');// eita hoilo sincronas
}

function Popup() {
    setTimeout(() => {
        console.log('Popup open');
    }, 2000);
}

Popup();
two();
video();
three();


//----------------callback function-----way
function getMyName() {
    console.log('Hridoy');
}
let anotherfunction = getMyName;// eita hoilo function 
anotherfunction();


function rakib(firstName,LastName) {
    console.log(firstName + '' +LastName);
}
rakib('shohel','RAJIP');// eita hoilo function 

function rakib2(firstname,lastname) {
    console.log(firstname,lastname);
}
let name1 = 'morshed';
let name2 = 'kalam';
rakib2 (name1,name2);// eita hoilo function 

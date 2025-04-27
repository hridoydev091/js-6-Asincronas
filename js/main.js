// // ------------------------asincronas

// console.log("hello");
// console.log("hello2");
// setTimeout(() => {
//     for (let i = 0;i <=5; i++){// asincronas ta pore output dibe
//         console.log(i);
//     }
//     console.log('after 2 second pore settimer bitor ja ache ta asbe asbe');
    
// },200)
// console.log('end3');


// function redy() {
//     setTimeout(() => {
//         console.log('redy hoilo asincronas');
//     }, 1000);
// }



// //--------------------------sincronas----------------------way


// function video() {
//     setTimeout(() => {
//         console.log('video arrive');
//     }, 1000);
// }

// function two() {
//     console.log('two');// eita hoilo sincronas
// }

// function three() {
//     console.log('three');// eita hoilo sincronas
// }

// function Popup() {
//     setTimeout(() => {
//         console.log('Popup open');
//     }, 2000);
// }

// Popup();
// two();
// video();
// three();


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



function getMyName1(fn2ta) {
    console.log(fn2ta);
}
let myfullname = function () {
    console.log("Rajdwip Majumder"); // ei khane 2ta function ek shathe kaj koreche
}
getMyName1(myfullname);




function getMyName2(raju) {
    raju();
}
let myfullname1 = function () {
    console.log("Nozrul islam");    // ei khane 2ta function ek shathe kaj koreche callback
}
getMyName2(myfullname1);





function getMy(first,Last,fn2ta) {
    fn2ta();
}
let myfull = function () {
    console.log("ontor"); // ei khane 2ta function ek shathe kaj koreche
}
let shakil = 10;
let hridoy = 20;
getMy(shakil,hridoy,myfull);




function full(fisrt1, second, sojol) {
    if (fisrt1 == 10) {
        sojol();
    } else {
        console.log("Sorry! Please try again later");
    }
}
let rajib = function () {
    console.log('asiqe');
}
let saimun = 10;
let sakip = 20;
full(saimun, sakip, rajib);






function getMy(firstName, lastName, callbackFunction) {
    callbackFunction(firstName, lastName);
}

let printFullName = function (firstName, lastName) {
    console.log(`Full Name is: ${firstName} ${lastName}`);
}

let shakil1 = "Hridoy";
let hridoy2 = "Ahmed";

getMy(shakil1, hridoy2, printFullName);

 
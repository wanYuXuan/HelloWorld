let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
// document.querySelector('html').onclick = function(){
//     alert('脏话');
// }


let switchImag = document.querySelector('img');
switchImag.onclick = function(){

    let myScr = switchImag.getAttribute('src');
    
    if(myScr==='resource/image/normal/Sekiro-断手.jpg'){
        switchImag.setAttribute('src','resource/image/normal/pic1.gif');
    }else{
        switchImag.setAttribute('src','resource/image/normal/Sekiro-断手.jpg');
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent="Welcome again ！"+storeName;
}

function setUserName(){
    let myName = prompt('your name：');
    if(!myName||myName===null){
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent='Greeting !'+myName;
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function(){
    setUserName();
}

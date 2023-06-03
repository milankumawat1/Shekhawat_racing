change = document.querySelector('.change')
change.innerTEXT="Welcome!!"
fun=()=>{
    if (change.innerText=="Welcome!!") {
        change.innerText="We are glad to see you!";
    }
    else{
        change.innerText="Welcome!!";
    }

}

setInterval(fun,3000);
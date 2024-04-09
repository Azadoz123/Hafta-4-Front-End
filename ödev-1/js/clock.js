let name = document.querySelector('#myName')
let clock = document.querySelector('#myClock')

name.innerHTML = prompt("Adınız")
name.addEventListener("click", showTime)
clock.addEventListener("load", showTime);

function showTime() {
    console.log("aaaaa")
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();
    clock.innerHTML = currentDateTime

    console.log(currentDateTime)
}   
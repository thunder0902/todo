

const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date()
    const houres = String(date.getHours()).padStart(2, "0");
    const miuntes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText=`${houres}:${miuntes}:${seconds}`;

}
getClock();
setInterval(getClock,1000);
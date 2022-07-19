let h = document.getElementById("watch");
let p = document.createElement('span');
let minutes = 0;
let seconds= 0;

const increase = () => {
    if(seconds === 60) {
        minutes++;
        seconds=0;
    }
    seconds++;
    p.innerHTML = ":" + seconds;
    h.innerHTML = minutes;
    h.appendChild(p);
}

setInterval(increase, 100);


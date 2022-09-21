const el = document.getElementById("smashpass");
let i = 0;
window.setInterval(()=>{
    i++;
    if (i % 2 == 0) {
        el.textContent = "SMASH";
    } else {
        el.textContent = "PASS";
    }
},3000);
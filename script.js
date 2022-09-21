const el = document.getElementById("smashpass");
let i = 0;
window.setInterval(()=>{
    i++;
    if (i % 2 == 0) {
        el.textContent = "SMASH";
        document.title = "SMASH";
    } else {
        el.textContent = "PASS";
        document.title = "PASS";
    }
},3000);
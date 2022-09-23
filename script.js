function addText(ot, ad, ml) {
    return (ot + ad).trim().split(" ").splice((ot + ad).trim().split(" ").length-ml, (ot + ad).trim().split(" ").length).join(" ").trim();
}
function regulateRange(i, r) {
    return i % r;
}
const el = document.getElementById("smashpass");
let i = 0;
let word = "";
window.setInterval(()=>{
    i = regulateRange(i, 3);
    if (i == 0) {
        word = addText(word, " SMASH", 2);
    } else 
    if (i == 1) {
        word = addText(word, " OR", 2);
    } else
    if (i == 2) {
        word = addText(word, " PASS", 2);
    }
    el.textContent = word;
    document.title = word;
    i++;
},3000);
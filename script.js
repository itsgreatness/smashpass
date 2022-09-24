function regulateLength(s, ml) {
    return s.substring(s.length-ml,s.length);
}
function tick() {
    word += MAX_WORD[word.length%MAX_WORD.length];
    document.title = regulateLength(word, MAX_WORD.length);
    TEXT_ELEM.textContent = regulateLength(word, MAX_WORD.length);
}
const TEXT_ELEM = document.getElementById("smash");
const MAX_WORD = "SMASH OR PASS ";
let word = TEXT_ELEM.textContent;
document.addEventListener("keypress", tick);
window.setInterval(tick, 1000/6);
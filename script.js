function regulateLength(s, ml) {
    return s.substring(s.length-ml,s.length);
}
/*
    remember when i implemented this function ^
    well theres a string length limit and the memory consumption
    so will have to code it so that it is *possible* to optimize
    the "word" var itself instead of just the visible output
    
    i bet youre thinking its very easy, future me
    trust me its not when the "word" var maintains the same length 
    it will keep adding the first and *only* the first letter 
    from "MAX_WORD" i hope you understand why or else youre dumber 
    than i thought

    OK, pushing this change now
*/
function tick() {
    word += MAX_WORD[word.length%MAX_WORD.length];
    document.title = regulateLength(word, MAX_WORD.length);
    TEXT_ELEM.textContent = regulateLength(word, MAX_WORD.length);
}
const TEXT_ELEM = document.getElementById("smash");
const MAX_WORD = "SMASH OR PASS ";
let word = document.title;
document.addEventListener("keypress", tick);
window.setInterval(tick, 1000/6);
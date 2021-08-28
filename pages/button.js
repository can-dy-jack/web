// box -> navigator


// bootstrap-ui
// daisy-ui
// material-ui
const navigator1 = document.getElementById('bootstrap-ui');
const navigator2 = document.getElementById('daisy-ui');
const navigator3 = document.getElementById('material-ui');
const n1 = document.querySelector('.bootstrap-ui');
const n2 = document.querySelector('.daisy-ui');
const n3 = document.querySelector('.material-ui');

function clearActive(dom1,dom2){
    if(dom1.classList.contains('active')){
        dom1.classList.remove('active');
    }
    if(dom2.classList.contains('active')){
        dom2.classList.remove('active');
    }
}
function addHidden(dom, dom2){
    if(dom.hidden != true){
        dom.hidden = true;
    }
    if(dom2.hidden != true){
        dom2.hidden = true;
    }
}
navigator2.onclick = function(){
    navigator2.classList.add('active');
    clearActive(navigator1, navigator3);
    addHidden(n1, n3);
    n2.hidden = false;
}
navigator1.onclick = function(){
    navigator1.classList.add('active');
    clearActive(navigator2, navigator3);
    addHidden(n2, n3);
    n1.hidden = false;
}
navigator3.onclick = function(){
    navigator3.classList.add('active');
    clearActive(navigator1, navigator2);
    addHidden(n1, n2);
    n3.hidden = false;
}
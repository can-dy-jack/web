const box = document.querySelector('.box');
const nav = document.querySelector('nav');

// mode change 
const ModeBtn = document.querySelector('.change-mode');
const ModeList = document.querySelector('.mode-list');

ModeBtn.onclick = function(){
    ModeList.style.display = 'block';
}
function closeList(){
    ModeList.style.display = 'none';
}
box.addEventListener('click',closeList);
nav.addEventListener('click',closeList);


// .code
// add circle type
const code = document.querySelectorAll('.code');
for(let k=0;k<code.length;k++){
    var circle = document.createElement('span');
    circle.classList.add('circle');
    code[k].appendChild(circle);
}

// step
const install = document.getElementById('install');
install.onclick = function(){
    window.location = "../../index.html";
}

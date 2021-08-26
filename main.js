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


// box -> navigator
const navigator1 = document.querySelectorAll('.navigator1');
var navDiv = document.querySelectorAll('.navigator1>div');
function clearActive(dom){
    for(let i =0;i<dom.length;i++){
        if(dom[i].classList.contains('active')){
            dom[i].classList.remove('active');
        }
    }
}
for(let j =0;j<navDiv.length;j++){
    navDiv[j].onclick = function(){
        if(navDiv[j].className != 'active'){
            clearActive(navDiv);
            navDiv[j].className = 'active';
        }
    }
}



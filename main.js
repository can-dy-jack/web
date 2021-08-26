
// box -> navigator
const navigator1Plugin = document.getElementById('plugin');
const navigator1CDN = document.getElementById('cdn');
const navigator1Wind = document.getElementById('windixcss');
const navigator1Bass = document.getElementById('bass');
const plugin = document.querySelector('.plugin');
const CDN = document.querySelector('.cdn');
const Wind = document.querySelector('.windixcss');
const bass = document.querySelector('.bass');

function clearActive(dom1,dom2,dom3){
    if(dom1.classList.contains('active')){
        dom1.classList.remove('active');
    }
    if(dom2.classList.contains('active')){
        dom2.classList.remove('active');
    }
    if(dom3.classList.contains('active')){
        dom3.classList.remove('active');
    }
}
function addHidden(dom, dom2, dom3){
    if(dom.hidden != true){
        dom.hidden = true;
    }
    if(dom2.hidden != true){
        dom2.hidden = true;
    }
    if(dom3.hidden != true){
        dom3.hidden = true;
    }
}
navigator1CDN.onclick = function(){
    navigator1CDN.classList.add('active');
    clearActive(navigator1Plugin, navigator1Wind, navigator1Bass);
    addHidden(plugin, Wind, bass);
    CDN.hidden = false;
}
navigator1Plugin.onclick = function(){
    navigator1Plugin.classList.add('active');
    clearActive(navigator1CDN, navigator1Wind, navigator1Bass);
    addHidden(CDN, Wind, bass);
    plugin.hidden = false;
}
navigator1Wind.onclick = function(){
    navigator1Wind.classList.add('active');
    clearActive(navigator1Plugin, navigator1CDN, navigator1Bass);
    addHidden(plugin, CDN, bass);
    Wind.hidden = false;
}
navigator1Bass.onclick = function(){
    navigator1Bass.classList.add('active');
    clearActive(navigator1Plugin, navigator1Wind, navigator1CDN);
    addHidden(plugin, Wind, CDN);
    bass.hidden = false;
}

// change content
// const listDiv = document.querySelectorAll('.list>div');

// for(let i =0;i<listDiv.length;i++){
//     listDiv[i].onclick = function(){
//         removeActiveL(listDiv);
//         listDiv[i].classList.add('active');
//     }
// }
// function removeActiveL(dom){
//     for(let i=0;i<dom.length;i++){
//         dom[i].classList.remove('active');
//     }
// }
const listButtons = document.getElementById('button');
listButtons.onclick = function(){
    window.location = "./assets/pages/buttons.html";
}

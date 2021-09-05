const settingItems = document.querySelectorAll('.setting-items>div>div');

function removeAll(dom){
    for(let i=0;i<dom.length;i++){
        if(dom[i].classList.contains('active')){
           dom[i].classList.remove('active'); 
        }
    }
}

for(let i=0;i<settingItems.length;i++){
    settingItems[i].onclick = function(){
        if(!settingItems[i].classList.contains('active')){
            removeAll(settingItems);
            settingItems[i].classList.add('active');
        }
    }
}

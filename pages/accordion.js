// /* test */
// .section .head:hover span{
//     color: blue;
//     border-bottom-color: blue;
// }
// .section .head:hover .nav{
//     transform: ;
// }

const head = document.querySelectorAll('.head');
const title = document.querySelectorAll('.title');
const navTop = document.querySelectorAll('.nav-top');
const bodies = document.querySelectorAll('.bodies');
var open = false;

function clickOpen(box,t,n,b){
    box.onclick = function(){
        if(open){
            t.style.color = '#1212e3';
            t.style.borderBottomColor = '#1212e3';
            n.style.transform = 'rotateZ(180deg)';
            b.style.animation = 'textDisplayNone 0.8s ease-out'
            setTimeout(() => {
                b.style.display = 'none'
            }, 700);
            open = false;
        }else{
            t.style.color = '#111';
            t.style.borderBottomColor = '#111';
            n.style.transform = 'rotateZ(0)';
            b.style.display = 'block';
            b.style.animation = 'textDisplay 0.5s linear';
            open = true;
        }
        
    }
}
for(let i=0;i<head.length;i++){
    clickOpen(head[i],title[i],navTop[i],bodies[i]);
}


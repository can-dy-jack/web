const mg = document.querySelector('.mg');
mg.onmouseover = function(){
    mg.classList.add('magic');
    setTimeout("mg.classList.remove('magic')",2000);
}

// td
const td = document.querySelector('.td');
td.onmouseover = function(){
    td.classList.add('twisterInDown');
    setTimeout("td.classList.remove('twisterInDown')",2000);
}

//tu
const tu = document.querySelector('.tu');
tu.onmouseover = function(){
    tu.classList.add('twisterInUp');
    setTimeout("tu.classList.remove('twisterInUp')",2000);
}

// s 
const s = document.querySelector('.s');
s.onmouseover = function(){
    s.classList.add('swap');
    setTimeout("s.classList.remove('swap')",2000);
}

// pi 
const pi = document.querySelector('.pi');
pi.onclick = function(){
    pi.classList.add('puffIn');
    setTimeout("pi.classList.remove('puffIn')",2000);
}

// po 
const po = document.querySelector('.po');
po.onclick = function(){
    po.classList.add('puffOut');
    setTimeout("po.classList.remove('puffOut')",2000);
}
// vi 
const vi = document.querySelector('.vi');
vi.onclick = function(){
    vi.classList.add('vanishIn');
    setTimeout("vi.classList.remove('vanishIn')",2000);
}
// vo 
const vo = document.querySelector('.vo');
vo.onclick = function(){
    vo.classList.add('vanishOut');
    setTimeout("vo.classList.remove('vanishOut')",2000);
}



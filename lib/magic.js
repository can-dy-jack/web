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

// odl 
const odl = document.querySelector('.odl');
odl.onclick = function(){
    odl.classList.add('openDownLeft');
    setTimeout("odl.classList.remove('openDownLeft')",2000);
}
// odr 
const odr = document.querySelector('.odr');
odr.onclick = function(){
    odr.classList.add('openDownRight');
    setTimeout("odr.classList.remove('openDownRight')",2000);
}
// oul 
const oul = document.querySelector('.oul');
oul.onclick = function(){
    oul.classList.add('openUpLeft');
    setTimeout("oul.classList.remove('openUpLeft')",2000);
}
// our 
const our = document.querySelector('.our');
our.onclick = function(){
    our.classList.add('openUpRight');
    setTimeout("our.classList.remove('openUpRight')",2000);
}

// odl 
const odlr = document.querySelector('.odlr');
odlr.onclick = function(){
    odlr.classList.add('openDownLeftRetourn');
    setTimeout("odlr.classList.remove('openDownLeftRetourn')",2000);
}
// odr 
const odrr = document.querySelector('.odrr');
odrr.onclick = function(){
    odrr.classList.add('openDownRightRetourn');
    setTimeout("odrr.classList.remove('openDownRightRetourn')",2000);
}
// oul 
const oulr = document.querySelector('.oulr');
oulr.onclick = function(){
    oulr.classList.add('openUpLeftRetourn');
    setTimeout("oulr.classList.remove('openUpLeftRetourn')",2000);
}
// our 
const ourr = document.querySelector('.ourr');
ourr.onclick = function(){
    ourr.classList.add('openUpRightRetourn');
    setTimeout("ourr.classList.remove('openUpRightRetourn')",2000);
}

// odlo
const odlo = document.querySelector('.odlo');
odlo.onclick = function(){
    odlo.classList.add('openDownLeftOut');
    setTimeout("odlo.classList.remove('openDownLeftOut')",2000);
}
const odro = document.querySelector('.odro');
odro.onclick = function(){
    odro.classList.add('openDownRightOut');
    setTimeout("odro.classList.remove('openDownRightOut')",2000);
}
const oulo = document.querySelector('.oulo');
oulo.onclick = function(){
    oulo.classList.add('openUpLeftOut');
    setTimeout("oulo.classList.remove('openUpLeftOut')",2000);
}
const ouro = document.querySelector('.ouro');
ouro.onclick = function(){
    ouro.classList.add('openUpRightOut');
    setTimeout("ouro.classList.remove('openUpRightOut')",2000);
}

// ped 
const ped = document.querySelector('.ped');
ped.onclick = function(){
    ped.classList.add('perspectiveDown');
    setTimeout("ped.classList.remove('perspectiveDown')",2000);
}
const peu = document.querySelector('.peu');
peu.onclick = function(){
    peu.classList.add('perspectiveUp');
    setTimeout("peu.classList.remove('perspectiveUp')",2000);
}
const pel = document.querySelector('.pel');
pel.onclick = function(){
    pel.classList.add('perspectiveLeft');
    setTimeout("pel.classList.remove('perspectiveLeft')",2000);
}
const per = document.querySelector('.per');
per.onclick = function(){
    per.classList.add('perspectiveRight');
    setTimeout("per.classList.remove('perspectiveRight')",2000);
}
const pedr = document.querySelector('.pedr');
pedr.onclick = function(){
    pedr.classList.add('perspectiveDownRetourn');
    setTimeout("pedr.classList.remove('perspectiveDownRetourn')",2000);
}
const peur = document.querySelector('.peur');
peur.onclick = function(){
    peur.classList.add('perspectiveUpRetourn');
    setTimeout("peur.classList.remove('perspectiveUpRetourn')",2000);
}
const pelr = document.querySelector('.pelr');
pelr.onclick = function(){
    pelr.classList.add('perspectiveLeftRetourn');
    setTimeout("pelr.classList.remove('perspectiveLeftRetourn')",2000);
}
const perr = document.querySelector('.perr');
perr.onclick = function(){
    perr.classList.add('perspectiveRightRetourn');
    setTimeout("perr.classList.remove('perspectiveRightRetourn')",2000);
}
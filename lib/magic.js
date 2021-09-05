const magicBox = {
    data() {
        return {
            magicEffects: [
                {id: 0,text: 'magic'},
                {id: 1,text: 'twisterInDown'},
                {id: 2,text: 'twisterInUp'},
                {id: 3,text: 'swap'}
            ],
            staticEffects: [
                {id: 0,text: 'openDownLeft'},
                {id: 1,text: 'openDownRight'},
                {id: 2,text: 'openUpLeft'},
                {id: 3,text: 'openUpRight'},
                {id: 4,text: 'oDLReturn'},
                {id: 5,text: 'oDRReturn'},
                {id: 6,text: 'oULReturn'},
                {id: 7,text: 'oURReturn'}
            ]
        }
    }
}

const app = Vue.createApp(magicBox)

app.component('magic-list', {
    props: ['list'],
    template: `<div class='magictime'>{{ list.text }}</div>`
})

app.mount('#magic-box')


// magic-effects
const mg = document.querySelector('.magic-effects>div:nth-child(1)');
mg.onmouseover = function () {
    mg.classList.add('magic');
    setTimeout("mg.classList.remove('magic')", 2000);
}
const td = document.querySelector('.magic-effects>div:nth-child(2)');
td.onmouseover = function () {
    td.classList.add('twisterInDown');
    setTimeout("td.classList.remove('twisterInDown')", 2000);
}
const tu = document.querySelector('.magic-effects>div:nth-child(3)');
tu.onmouseover = function () {
    tu.classList.add('twisterInUp');
    setTimeout("tu.classList.remove('twisterInUp')", 2000);
}
const s = document.querySelector('.magic-effects>div:nth-child(4)');
s.onmouseover = function () {
    s.classList.add('swap');
    setTimeout("s.classList.remove('swap')", 2000);
}

// pi 
const pi = document.querySelector('.pi');
pi.onclick = function () {
    pi.classList.add('puffIn');
    setTimeout("pi.classList.remove('puffIn')", 2000);
}

// po 
const po = document.querySelector('.po');
po.onclick = function () {
    po.classList.add('puffOut');
    setTimeout("po.classList.remove('puffOut')", 2000);
}
// vi 
const vi = document.querySelector('.vi');
vi.onclick = function () {
    vi.classList.add('vanishIn');
    setTimeout("vi.classList.remove('vanishIn')", 2000);
}
// vo 
const vo = document.querySelector('.vo');
vo.onclick = function () {
    vo.classList.add('vanishOut');
    setTimeout("vo.classList.remove('vanishOut')", 2000);
}

// static-effects 
const odl = document.querySelector('.static-effects>div:nth-child(1)');
odl.onclick = function () {
    odl.classList.add('openDownLeft');
    setTimeout("odl.classList.remove('openDownLeft')", 2000);
}
const odr = document.querySelector('.static-effects>div:nth-child(2)');
odr.onclick = function () {
    odr.classList.add('openDownRight');
    setTimeout("odr.classList.remove('openDownRight')", 2000);
}
const oul = document.querySelector('.static-effects>div:nth-child(3)');
oul.onclick = function () {
    oul.classList.add('openUpLeft');
    setTimeout("oul.classList.remove('openUpLeft')", 2000);
}
const our = document.querySelector('.static-effects>div:nth-child(4)');
our.onclick = function () {
    our.classList.add('openUpRight');
    setTimeout("our.classList.remove('openUpRight')", 2000);
}
const odlr = document.querySelector('.static-effects>div:nth-child(5)');
odlr.onclick = function () {
    odlr.classList.add('openDownLeftRetourn');
    setTimeout("odlr.classList.remove('openDownLeftRetourn')", 2000);
} 
const odrr = document.querySelector('.static-effects>div:nth-child(6)');
odrr.onclick = function () {
    odrr.classList.add('openDownRightRetourn');
    setTimeout("odrr.classList.remove('openDownRightRetourn')", 2000);
}
const oulr = document.querySelector('.static-effects>div:nth-child(7)');
oulr.onclick = function () {
    oulr.classList.add('openUpLeftRetourn');
    setTimeout("oulr.classList.remove('openUpLeftRetourn')", 2000);
}
const ourr = document.querySelector('.static-effects>div:nth-child(8)');
ourr.onclick = function () {
    ourr.classList.add('openUpRightRetourn');
    setTimeout("ourr.classList.remove('openUpRightRetourn')", 2000);
}

// odlo
const odlo = document.querySelector('.odlo');
odlo.onclick = function () {
    odlo.classList.add('openDownLeftOut');
    setTimeout("odlo.classList.remove('openDownLeftOut')", 2000);
}
const odro = document.querySelector('.odro');
odro.onclick = function () {
    odro.classList.add('openDownRightOut');
    setTimeout("odro.classList.remove('openDownRightOut')", 2000);
}
const oulo = document.querySelector('.oulo');
oulo.onclick = function () {
    oulo.classList.add('openUpLeftOut');
    setTimeout("oulo.classList.remove('openUpLeftOut')", 2000);
}
const ouro = document.querySelector('.ouro');
ouro.onclick = function () {
    ouro.classList.add('openUpRightOut');
    setTimeout("ouro.classList.remove('openUpRightOut')", 2000);
}

// ped 
const ped = document.querySelector('.ped');
ped.onclick = function () {
    ped.classList.add('perspectiveDown');
    setTimeout("ped.classList.remove('perspectiveDown')", 2000);
}
const peu = document.querySelector('.peu');
peu.onclick = function () {
    peu.classList.add('perspectiveUp');
    setTimeout("peu.classList.remove('perspectiveUp')", 2000);
}
const pel = document.querySelector('.pel');
pel.onclick = function () {
    pel.classList.add('perspectiveLeft');
    setTimeout("pel.classList.remove('perspectiveLeft')", 2000);
}
const per = document.querySelector('.per');
per.onclick = function () {
    per.classList.add('perspectiveRight');
    setTimeout("per.classList.remove('perspectiveRight')", 2000);
}
const pedr = document.querySelector('.pedr');
pedr.onclick = function () {
    pedr.classList.add('perspectiveDownRetourn');
    setTimeout("pedr.classList.remove('perspectiveDownRetourn')", 2000);
}
const peur = document.querySelector('.peur');
peur.onclick = function () {
    peur.classList.add('perspectiveUpRetourn');
    setTimeout("peur.classList.remove('perspectiveUpRetourn')", 2000);
}
const pelr = document.querySelector('.pelr');
pelr.onclick = function () {
    pelr.classList.add('perspectiveLeftRetourn');
    setTimeout("pelr.classList.remove('perspectiveLeftRetourn')", 2000);
}
const perr = document.querySelector('.perr');
perr.onclick = function () {
    perr.classList.add('perspectiveRightRetourn');
    setTimeout("perr.classList.remove('perspectiveRightRetourn')", 2000);
}
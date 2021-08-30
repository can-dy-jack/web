const img = document.querySelector('.img-circle>img');

const solid = document.getElementById('solid');
const dashed = document.getElementById('dashed');
const double = document.getElementById('double');
const ridge = document.getElementById('ridge');

ridge.onclick = function(){
    img.style.borderStyle = 'ridge';
}
solid.onclick = function(){
    img.style.borderStyle = 'solid';
}
double.onclick = function(){
    img.style.borderStyle = 'double';
}
dashed.onclick = function(){
    img.style.borderStyle = 'dashed';
}
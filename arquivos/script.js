
const hrs = document.querySelector('#hrs');
const min = document.querySelector('#min');
const seg = document.querySelector('#seg');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let h = dateToday.getHours();
    //let h = 20;
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(h < 10) hr = '0' + h;
    if(m < 10) m = '0' + m;
    if(s < 10) s = '0' + s;

    hrs.textContent = h;
    min.textContent = m;
    seg.textContent = s;

    let body = document.querySelector('body');
    let relogio = document.querySelector('.relogio');

    if(h > 19){
    body.style.background = 'linear-gradient(120deg, #001149d8, #000000)';
    relogio.style.background = '#ffffff9f';
    relogio.style.boxShadow = '0px 0px 75px rgba(255, 255, 255, 0.774)';
}
});

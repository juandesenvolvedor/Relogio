
const hrs = document.querySelector('#hrs');
const min = document.querySelector('#min');
const seg = document.querySelector('#seg');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let h = dateToday.getHours();
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
    relogio.style.background = 'white';
    relogio.style.boxShadow = '0px 0px 75px rgba(255, 255, 255, 0.774)';
    }



    //turno

    let turno = document.querySelector('#toggle');
    let amoupm = document.querySelector('#amoupm');


    if(turno.checked){
        amoupm.style.display = 'flex';
        relogio.style.width = '680px';
        
        if(h > 12){
            if(h < 22){
                hrs.textContent = '0' + (h - 12);
                amoupm.textContent = 'PM';
                amoupm.style.fontSize = '60px'
            }else{
                hrs.textContent = h - 12;
                amoupm.textContent = 'PM';
                amoupm.style.fontSize = '60px'
            }
            amoupm.style.fontSize = '60px'
        }else{
            amoupm.textContent = 'AM';
            amoupm.style.fontSize = '60px'
        }
    }else{
        amoupm.style.display = 'none';
        relogio.style.width = '500px';
    }

});

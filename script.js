function changeImage(){
    mesa1=document.getElementById('mesa1');
    if(mesa1.src.match('mesaOff')){
        mesa1.src="imagenes/mesaOn2.jpg";
    }else{
        mesa1.src="imagenes/mesaOff.jpg";
    }
}

function changeImage2(){
    mesa2=document.getElementById('mesa2');
    if(mesa2.src.match('mesaOff')){
        mesa2.src="imagenes/mesaOn2.jpg";
    }else{
        mesa2.src="imagenes/mesaOff.jpg";
    }
}
function changeImage3(){
    mesa3=document.getElementById('mesa3');
    if(mesa3.src.match('mesaOff')){
        mesa3.src="imagenes/mesaOn2.jpg";
    }else{
        mesa3.src="imagenes/mesaOff.jpg";
    }
}
function changeImage4(){
    mesa4=document.getElementById('mesa4');
    if(mesa4.src.match('mesaOff')){
        mesa4.src="imagenes/mesaOn2.jpg";
    }else{
        mesa4.src="imagenes/mesaOff.jpg";
    }
}
function changeImage5(){
    mesa5=document.getElementById('mesa5');
    if(mesa5.src.match('mesaOff')){
        mesa5.src="imagenes/mesaOn2.jpg";
    }else{
        mesa5.src="imagenes/mesaOff.jpg";
    }
}
function changeImage6(){
    mesa6=document.getElementById('mesa6');
    if(mesa6.src.match('mesaOff')){
        mesa6.src="imagenes/mesaOn2.jpg";
    }else{
        mesa6.src="imagenes/mesaOff.jpg";
    }
}

const  mueveReloj = () => {
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.getElementById("reloj").value = horaImprimible;
    document.getElementById("reloj1").innerHTML = horaImprimible;
    
    setTimeout("mueveReloj()",1000)
}

mueveReloj("reloj1").value;
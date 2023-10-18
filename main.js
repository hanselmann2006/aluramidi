function tocaSomPom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla');

 
 listaDeTeclas[0].onclick = tocaSomPom;
 
 
 for(contador = 0; contador < listaDeTeclas.legth; contador ++){
     const instrumento = listaDeTeclas[contador].classsList[1];

     const tecla = listDeTeclas[contador];

     const idAudio = `#som_${instrumento}`;
     tecla.onclick = function(){
        tocaSomPom(idAudio);
    };
 
}



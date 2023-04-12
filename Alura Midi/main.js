function playSong(idElementSong){

    document.querySelector(idElementSong).play();
}

// referencia constante 
const KeyList = document.querySelectorAll('.tecla');
// referencia variavel


for(let accountant = 0; accountant < KeyList.length; accountant++){

    const key = KeyList[accountant];
    const instrument = key.classList[1];
    const idAudio = `#som_${instrument}`; //template string
    
    KeyList[accountant].onclick = function(){
        playSong(idAudio);
    }

    //console.log(idAudio);
    //console.log(accountant);
}

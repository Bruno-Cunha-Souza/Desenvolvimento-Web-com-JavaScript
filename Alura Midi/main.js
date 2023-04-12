function playSong(idElementSong){

    document.querySelector(idElementSong).play();
}

// referencia constante 
const KeyList = document.querySelectorAll('.tecla');
// referencia variavel
let accountant = 0;

while(accountant < KeyList.length ){

    const key = KeyList[accountant];
    const instrument = key.classList[1];

    const idAudio = `#som_${instrument}`;
    //console.log(idAudio);

    KeyList[accountant].onclick = function(){
        playSong(idAudio);
    }

    accountant = accountant + 1;
    //console.log(accountant);
}
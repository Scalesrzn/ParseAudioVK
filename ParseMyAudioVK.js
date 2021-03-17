var oSong,
    oArtist,
    iCountSong,
    iWindowHeight,
    iOldHeight,
    aMusic;
// Скроллим страницу
async function ScrollPage(Height){
    let scroll = new Promise((resolve, reject) => {
        window.scrollTo({top: Height ,behavior: "smooth"});
        // window.scrollTo(Height, document.body.scrollWidth); //резкая прокрутка по координатам
       });
    await scroll;
    
}
// Получаем высоту документа
function GetMaxHeight(){
    iWindowHeight    = Math.max  (
                                    document.body.scrollHeight, document.documentElement.scrollHeight,
                                    document.body.offsetHeight, document.documentElement.offsetHeight,
                                    document.body.clientHeight, document.documentElement.clientHeight
                                )
    return iWindowHeight
}

// Получаем список всех аудио
function GetAudioList(){
    oArtist     =   document.getElementsByClassName('audio_row__performers');
    oSong       =   document.getElementsByClassName('audio_row__title_inner');
    iCountSong  =   oSong.length;
    for (var i = 0; i < iCountSong; i++){
        aMusic+= (oArtist[i].textContent.toString() + " - " +  oSong[i].textContent.toString() + ";" + "\r\n");
    }
    return aMusic
}

function Main(){
    iOldHeight   = GetMaxHeight()  // эта переменная и (см ниже)
    alert(iOldHeight)
    ScrollPage(iOldHeight);
    alert(GetMaxHeight())
    while (iOldHeight < GetMaxHeight()){ // значение ТЕКУЩЕГО GetMaxHeight() совпадает. Скролл выполняется после, хоят стоит await
        iOldHeight   = GetMaxHeight();
        ScrollPage(iOldHeight);
    }
    // console.log(GetAudioList());
}

Main();


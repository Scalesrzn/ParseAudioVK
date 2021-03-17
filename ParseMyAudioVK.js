var oSong,
    oArtist,
    iCountSong,
    iWindowWidth,
    iOldWidth,
    iNewWidth,
    aMusic;

async function ScrollPage(Width){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => window.scrollTo(document.body.scrollWidth, Width), 30000);
      });
    await promise;
}
//Получаем высоту документа
function GetMaxWidth(){
    iWindowWidth    = Math.max  (
                                    document.body.scrollHeight, document.documentElement.scrollHeight,
                                    document.body.offsetHeight, document.documentElement.offsetHeight,
                                    document.body.clientHeight, document.documentElement.clientHeight
                                )
    return iWindowWidth
}

//Получаем список всех аудио
function GetAudioList(){
    oArtist     =   document.getElementsByClassName('audio_row__performers');
    oSong       =   document.getElementsByClassName('audio_row__title_inner');
    iCountSong  =   oSong.length;
    for (var i = 0; i < iCountSong; i++){
        aMusic+= (oArtist[i].textContent.toString() + " - " +  oSong[i].textContent.toString() + "\r\n");
    }
    return aMusic
}
    
function GetPageStatus(OldWidth){
    if (OldWidth < GetMaxWidth())
        return true
    else
        return false

}

function Main(){
    iOldWidth   =   GetMaxWidth();
    // alert(iOldWidth);
    window.scrollTo(document.body.scrollWidth, 100000);
    // alert(GetMaxWidth());
    while (GetPageStatus(iOldWidth)){
        iOldWidth   = GetMaxWidth();
        ScrollPage(100000);
        // alert(iOldWidth);
    }
    console.log(GetAudioList());
}

Main();


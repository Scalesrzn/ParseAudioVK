var oSong,
    oArtist,
    iCountSong,
    iWindowWidth,
    iOldWidth,
    iNewWidth,
    aMusic;

// function GetMaxWidth(){
//     iWindowWidth    = '';
//     iWindowWidth    = Math.max  (
//                                     document.body.scrollHeight, document.documentElement.scrollHeight,
//                                     document.body.offsetHeight, document.documentElement.offsetHeight,
//                                     document.body.clientHeight, document.documentElement.clientHeight
//                                 )
//     return iWindowWidth
// }
    
oArtist         = document.getElementsByClassName('audio_row__performers');
oSong           = document.getElementsByClassName('audio_row__title_inner');
// iOldWidth       = GetMaxWidth().toString();
// window.scrollTo(document.body.scrollWidth, 100000);
// while (i < 30){
//     window.scrollTo(document.body.scrollWidth, 100000);
//     console.log($(window).height());
//     i++;
// }

iCountSong      = oSong.length;
for (var i = 0; i < iCountSong; i++){
    aMusic+= (oArtist[i].textContent.toString() + " - " +  oSong[i].textContent.toString() + "\r\n");
}

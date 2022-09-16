var videos = document.querySelectorAll('video');
for (var i = 0; i < videos.length; i++)
    videos[i].addEventListener('play', function () {
        pauseAll(this)
    }, true);


function pauseAll(elem) {
    for (var i = 0; i < videos.length; i++) {
        //Is this the one we want to play?
        if (videos[i] == elem) continue;
        //Have we already played it && is it already paused?
        if (videos[i].played.length > 0 && !videos[i].paused) {
            // Then pause it now
            videos[i].pause();
        }
    }
}

function cancel() {
    if (document.getElementById("check").checked == true) {

        document.getElementById("cancel").style.backgroundImage = "url(./cancel.svg)"
    } else {

        document.getElementById("cancel").style.backgroundImage = "url(./menu.svg)"
    }


}


var audios = document.querySelectorAll('audio');
for (var i = 0; i < audios.length; i++)
    audios[i].addEventListener('play', function () {
        pauseAllAudios(this)
    }, true);


function pauseAllAudios(elem) {
    for (var i = 0; i < audios.length; i++) {
        //Is this the one we want to play?
        if (audios[i] == elem) continue;
        //Have we already played it && is it already paused?
        if (audios[i].played.length > 0 && !audios[i].paused) {
            // Then pause it now
            audios[i].pause();
        }
    }
}
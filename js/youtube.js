// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    //최초 재생할 영상의 아이디 주소 중에서 https://www.youtube.com/watch?v=An6LvWQuj_8 에서 = 뒷부분이 아이디
    playerVars : {
        // 이건 컨트롤할 요소들
        autoplay : true,
        loop : true,
        playlist:'An6LvWQuj_8',
        //반복 재생할 유튜브 영상 ID 목록
    },
    events:{
        onReady: function (event) {
            event.target.mute()//음소거
        }
    }
  });
}


import throttle from "lodash.throttle";
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(onPlayer, 1000));

    function onPlayer(e){
        console.log(e.seconds);
        localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));

    }

   function getData(){
      const setTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

      player.setCurrentTime(setTime).then(function (seconds) {});

    }
    getData();


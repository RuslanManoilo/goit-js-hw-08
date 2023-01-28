import Player from '@vimeo/player';

console.log(Player);


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



player.on('timeupdate', onPlay);

function onPlay(event) {
    console.log(event.seconds);

    timeArrey.push(event.seconds);
};

const timeArrey = [];
console.log(timeArrey);



player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});
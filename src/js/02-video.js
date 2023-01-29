import Player from '@vimeo/player';
var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(timeUpdate, 1000));


function timeUpdate({seconds}) {
  let timeArr = `${seconds}`;
  localStorage.setItem("videoplayer-current-time", JSON.stringify(timeArr));
};


const result = JSON.parse(localStorage.getItem("videoplayer-current-time"));
console.log(result);


if (result) {
  player.setCurrentTime(result);
};
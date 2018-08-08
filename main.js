var playPause = anime({
  targets: 'div.box',
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }
  ],
  rotate:{
    value: '1turn',
    easing: 'easeInOutSine'
  },
  borderRadius: '50%',
  backgroundColor: '#646464',
  border: '1px dashed #fff',
  delay: function(el, i, t){ return i * 1000},
  autoplay:false,
  loop:true
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;


// DRY code, should be a function based property parameters with element iteration and total targets
// anime({
//   target: 'div.box.red',
//   translateY: [
//     { value: 200, duration: 500 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine'
//   }
// });
//
// anime({
//   target: 'div.box.blue',
//   translateY: [
//     { value: 200, duration: 500, delay: 1000 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 1000
//   }
// });
//
// anime({
//   target: 'div.box.green',
//   translateY: [
//     { value: 200, duration: 500, delay: 2000 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 1000
//   }
// });
//
// anime({
//   target: 'div.box.yellow',
//   translateY: [
//     { value: 200, duration: 500, delay: 3000 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 1000
//   }
// });

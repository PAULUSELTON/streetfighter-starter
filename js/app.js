$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    //console.log("hi");
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
   //console.log("hi2");
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
  {'left': '1020px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '550px');
  }
);
 })
  .mouseup(function() {
   //console.log("hi3");
  $('.ryu-cool').hide();
    $('.ryu-throwing').hide();
  $('.ryu-ready').show();

  });
   $(document).keydown(function(event) {
    if ( event.which == 88 ) {
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      //console.log("hi4");
      $('.ryu-cool').show();
    }
       });
 $(document).keyup(function(event) {
    //console.log("hi5");
  if ( event.which == 88 ) {
   $('.ryu-cool').hide();
    $('.ryu-still').show();
         }
       });
 function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
   });
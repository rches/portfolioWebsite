$( document ).ready(function() {
    $('.toggle').click(function(){
      $('#bottomNav').toggleClass("visible")
        $('.navigationToggle').toggleClass('color-swap');
  });
});


var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);

  setTimeout(function ()
{ showText(target, message, index, interval);
}, interval);
  }
}

$( document ).ready(function() {
  showText("#msgOne", "console.log('Hello, World!')", 0, 100);
});

$("#globe").fadeIn(10000);

function playGame() {
  let points = 0;
  setInterval(function () {

    let thisInterval = setInterval(function () {
      $newDiv.html(`<div id="timer">${counter--}</div>`);
    }, 1000);

    let $newDiv = $('<div id="coin-box"><div id="timer">3</div></div>').css({
      'position': 'absolute',
      'top': `${Math.round(Math.random() * (window.innerHeight - 100))}px`,
      'left': `${Math.round(Math.random() * (window.innerWidth - 100))}px`,
      'width': '100px',
      'height': '100px',
      'background-color': 'transparent',
      'z-index': 100,
      'color': 'red',
      'text-align': 'center'
    }).appendTo('body').click(function () {
      $(this).hide();
      $('#score').html(++points);
    });
    setTimeout(function () {
      $newDiv.hide();
    }, 3000);
    let counter = 2;
  }, 1000);
};
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

const keyCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

var index = 0;

document.body.addEventListener('keydown', init);

function init(e) {

  var keyPressed = e.key;

  if(keyPressed === keyCode[index]) {
    index++;

    if(index === 10) {
      alert('Congratulations!');
      index = 0;
    }
  } else {
    index = 0;
  }
}

init();

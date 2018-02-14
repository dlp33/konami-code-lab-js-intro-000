const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

document.body.addEventListener('keydown', init.bind(this, event));

function init(event) {

  //console.log(e);

  var keyPressed = event.which;

  if(keyPressed === code[index]) {
    index++;

    if(index === 10) {
      alert('Congratulations!');
      index = 0;
    }
  } else {
    index = 0;
  }
}

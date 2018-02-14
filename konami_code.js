const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

var index = 0;

document.body.addEventListener('keydown', this.init.bind(e.which));

function init(e) {

  console.log(e);

  var keyPressed = e.which;

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

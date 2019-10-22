var container = document.querySelector('.container');

for (var i = 0; i < 50; i++) {
  for (var j = 0; j < 50; j++) {
    var button = document.createElement('button');
    var number = Math.floor(Math.random() * (4 - 1)) + 1;
    button.setAttribute('data-x', j);
    button.setAttribute('data-y', i);
    button.innerHTML = number;
    container.appendChild(button);

    button.addEventListener('click', clickButton)
    button.addEventListener('click', clickButton1)
    button.addEventListener('click', clickButton2)
  }
}

function clickButton() {
  var number = +this.innerHTML;
  var x = +this.getAttribute('data-x');
  var y = +this.getAttribute('data-y');
  if (number == 1) {
    back(1,x,y,'green');
  } else if(number == 2) {
    back(2,x,y,'blue');
  } else if(number == 3) {
    back(3,x,y,'red');
  }
}

function clickButton1() {
    var number = +this.innerHTML;
    var x = +this.getAttribute('data-x');
    var y = +this.getAttribute('data-y');
    if(number == 2) {
        back(1,x,y,'white');
    } else if(number == 3) {
        back(2,x,y,'white');
    }
}

function clickButton2() {
    var number = +this.innerHTML;
    var x = +this.getAttribute('data-x');
    var y = +this.getAttribute('data-y');
    if(number == 2) {
        back(0,x,y,'blue');
    } else if(number == 3) {
        back(0,x,y,'red');
    }
}

function back(shag, x, y,color) {
    for(var i = (x-shag);i <= (x+shag);i++) {
        for(var j = (y-shag);j <= (y+shag);j++) {
            const button = container.querySelector('button[data-x="'+ i +'"][data-y="'+ j +'"]');
            if(button) {
                button.style.background = color;
            }
        }
    }

}

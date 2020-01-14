var arr = [];
function play(onClick) {
    var player = document.getElementById('player');
    var clickedElement = document.getElementById(onClick)
    if (player.innerText === 'X') {
        player.innerText = 'O';
        clickedElement.innerText = 'X';
        arr[onClick] = 'X'
      } else {
        player.innerText = 'X';
        clickedElement.innerText = 'O';
        arr[onClick] = 'O'
      }

      var topLeft = arr[0];
      var topCenter = arr[1];
      var topRight = arr[2];
      var middleLeft = arr[3];
      var middleCenter = arr[4];
      var middleRight = arr[5];
      var bottomLeft = arr[6];
      var bottomCenter = arr[7];
      var bottomRight = arr[8];

      if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
          alert(`${topLeft} is the winner`);
          return;
      }
      if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
          alert(`${middleLeft} is the winner`);
          return;
      }
      if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
          alert(`${bottomLeft} is the winner`);
          return;
      }
      if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
          alert(`${topLeft} is the winner`);
          return;
      }
      if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
          alert(`${topCenter} is the winner`);
          return;
      }
      if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
          alert(`${topRight} is the winner`);
          return;
      }
      if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
          alert(`${topLeft} is the winner`);
          return;
      }
      if (bottomLeft !== undefined && bottomLeft === middleCenter &&  bottomLeft === topRight) {
          alert(`${bottomLeft} is the winner`);
          return;
      }
      let boardFull = true;
      for (let i = 0; i <= 8; i++) {
        if (arr[i] === undefined) {
          boardFull = false;
        }
      }
      if (boardFull === true) {
        alert("Cat's game, there is no winner");
      }
    }
    function reset() {
        arr = [];
        clickedElement.innerHTML = arr
      } 
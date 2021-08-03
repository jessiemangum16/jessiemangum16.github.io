function playDrum(e) {
    let k = e.keyCode;

    let sound = document.getElementById("s" + k);
    let key = document.getElementById("d" + k);

    key.classList.add('playing');

    key.style.transform = "translateY(10px)";

    sound.currentTime = 0;
    sound.play();
    
    
  }

  function removeTransition(e) {
    e.target.classList.remove('playing');
  }

  window.addEventListener('transitionend', removeTransition)
  window.addEventListener('keydown', playDrum);
  
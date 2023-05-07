// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // var section = document.getElementById('expose');
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('[alt="No image selected"]');

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('[alt="Volume level 2"]');

  const playSound = document.querySelector('button');

  const audio = document.querySelector('[class="hidden"]');
  var audioLoaded = false;

  const jsConfetti = new JSConfetti()

  // Horn Selection
  hornSelect.addEventListener('change', function(event) {
    // update image and audio
    image.src = `assets/images/${event.target.value}.svg`;
    image.alt = event.target.value.replace('-', ' ');
    audio.src = `assets/audio/${event.target.value}.mp3`;
    audioLoaded = true;
  });

  // Update volume icon and audio volume when slider changes
  volumeSlider.addEventListener('change', function(event) {
    audio.volume = event.target.value / 100;
    volumeIcon.src = `assets/icons/volume-level-${Math.ceil((event.target.value) / 33.45)}.svg`;
    volumeIcon.alt = `Volume level ${Math.ceil((event.target.value) / 33.45)}`;
  });

  // play sound when button is clicked
  playSound.addEventListener('click', function(event) {
    // play only if a valid audio is selected (avoids errors)
    if (audioLoaded) {
      audio.play();
      // check if party horn selected
      if (hornSelect.value == 'party-horn') jsConfetti.addConfetti();
    }
    
  });

}
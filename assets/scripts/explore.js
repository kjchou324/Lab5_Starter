// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const talkButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('[alt="Smiling face"]');

  const voiceSelect = document.getElementById('voice-select');
  const synth = window.speechSynthesis; 
  let voices = [];

  // add voices only after voices load
  synth.addEventListener('voiceschanged', function() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      // add attributes to make easier to query
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);

      voiceSelect.appendChild(option);
    }
  });

  talkButton.addEventListener('click', function() {
    // cancel old speech if button clicked again
    if (synth.speaking) synth.cancel();

    const utter = new SpeechSynthesisUtterance(textArea.value);

    // events for starting/ending speech
    utter.addEventListener("start", (event) => { 
      faceImage.setAttribute('src', 'assets/images/smiling-open.png') 
    });
    utter.addEventListener("end", (event) => { 
      faceImage.setAttribute('src', 'assets/images/smiling.png') 
    });

    // find the selected voice to use
    utter.voice = voices.find(element => element.name == voiceSelect.selectedOptions[0].getAttribute("data-name"));

    synth.speak(utter);
  });
  
}
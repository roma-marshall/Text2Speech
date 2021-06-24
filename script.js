//init
const synth = window.speechSynthesis;

const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const body = document.querySelector('body');

function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;

  if (x == 'de-DE') {
    value = 'de-DE';
  } else if (x == 'en-US') {
    value = 'en-US';
  }
    
  return value;
}

function check() {
  document.getElementById("myCheck").checked = true;
}

function uncheck() {
  document.getElementById("myCheck").checked = false;
}

const speak = () => {
  if (text.value !== '') {
    //get text
    const speakText = new SpeechSynthesisUtterance(text.value);

    //end
    speakText.onend = e => {
      console.log('done speaking...');
      body.style.background = '#141414';
    };

    //error
    speakText.onerror = e => {
      console.error('error');
    };

    /*
    speakText.lang = 'de-DE';
    speakText.lang = 'en-US';
   */


    speakText.lang = myFunction();
    

    //speak
    synth.speak(speakText);
  }
};


//submit
textForm.addEventListener('submit', e => {
  e.preventDefault();
  speak();
  text.blur();
});
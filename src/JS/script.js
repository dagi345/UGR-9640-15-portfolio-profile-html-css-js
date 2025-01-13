const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const audio = document.getElementById('intro_audio');
  const button = document.querySelector('.play_button');

// Toggle the menu when the burger is clicked
burger.addEventListener('click', (event) => {
  menu.classList.toggle('show');
  event.stopPropagation(); // Prevent propagation to document
});

// Close the menu when clicking outside 
document.addEventListener('click', () => {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
});


function toggleAudio() {
  

  if (audio.paused) {
      audio.play();
      button.textContent = "⏸️"; 
  } else {
      audio.pause();
      button.textContent = "▶️"; 
  }
}



// ..................................................................


const slider = document.getElementById('audio_slider');
    
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        slider.value = progress;
    });

    
    function seekAudio() {
        const seekTime = (slider.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    }
    // Reset button and slider when audio ends
    audio.addEventListener('ended', () => {
        button.textContent = "▶️"; // Reset to play icon
        slider.value = 0; // Reset slider
    });
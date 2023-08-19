//TODO: The dayjs time needs to be formatted

setInterval(function () 
  {
    const time = dayjs().format('DD/MM/YYYY');
    document.getElementById("timeEl").innerHTML = "Current time: " + time;

}, 1000);

function toggleLocalStorage() {
    const textArea = document.getElementById('textArea');
    const toggleButton = document.getElementById('toggleButton');
  
    // Check if there's already saved content
    const savedValue = localStorage.getItem('savedText');
  
    if (savedValue) {
      // If saved content exists, delete it from localStorage and clear the textarea
      localStorage.removeItem('savedText');
      textArea.value = '';
      toggleButton.textContent = '🔓'; // Unlocked icon
    } else {
      // If no saved content, save the textarea content to localStorage
      localStorage.setItem('savedText', textArea.value);
      toggleButton.textContent = '🔒'; // Locked icon
    }
  }
  
  // When the page loads, retrieve the saved value from localStorage and display it in the textarea
  window.onload = function() {
    const savedValue = localStorage.getItem('savedText');
    if (savedValue) {
      document.getElementById('textArea').value = savedValue;
      document.getElementById('toggleButton').textContent = '🔒'; // Locked icon
    }
  };
  
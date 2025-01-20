var a = 0; // Initialize a with 0

function pass() {
  if (a === 0) { // Check if a is 0
    document.getElementById('password').type = 'text';
    document.getElementById('pass-icon').src = 'pass-show.png';
    a = 1; // Set a to 1
  } else { 
    document.getElementById('password').type = 'password';
    document.getElementById('pass-icon').src = 'pass-hide.png';
    a = 0; // Set a to 0
  }
} 

function createFallingElement(type) {
    const element = document.createElement('div');
    element.className = 'falling-element';
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration between 2s and 5s
  
    if (type === 'heart') {
      element.innerHTML = '❤️'; // Heart emoji
    } else if (type === 'flower') {
      element.innerHTML = '🌸'; // Flower emoji
    }
  
    document.getElementById('falling-elements').appendChild(element);
  
    setTimeout(() => {
      element.remove();
    }, 5000); // Remove element after 5s
  }
  
  function startFalling() {
    setInterval(() => {
      createFallingElement('heart');
      createFallingElement('flower');
    }, 50); // Create new elements every 300ms
  }
  
  startFalling();
  
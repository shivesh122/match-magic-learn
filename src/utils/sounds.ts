// Sound utility functions for game feedback

export const playCorrectSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  // Create a cheerful ascending arpeggio
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  const duration = 0.15;
  
  notes.forEach((freq, index) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = freq;
    oscillator.type = 'sine';
    
    const startTime = audioContext.currentTime + (index * duration);
    gainNode.gain.setValueAtTime(0.3, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  });
};

export const playIncorrectSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  // Create a descending "oops" sound
  const notes = [400, 300, 250]; // Descending frequencies
  const duration = 0.1;
  
  notes.forEach((freq, index) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = freq;
    oscillator.type = 'triangle';
    
    const startTime = audioContext.currentTime + (index * duration);
    gainNode.gain.setValueAtTime(0.2, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  });
};

export const playCelebrationSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  // Create a fanfare-like celebration sound
  const notes = [
    { freq: 523.25, time: 0 },      // C5
    { freq: 659.25, time: 0.1 },    // E5
    { freq: 783.99, time: 0.2 },    // G5
    { freq: 1046.50, time: 0.3 },   // C6
    { freq: 783.99, time: 0.4 },    // G5
    { freq: 1046.50, time: 0.5 },   // C6
  ];
  
  notes.forEach(({ freq, time }) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = freq;
    oscillator.type = 'sine';
    
    const startTime = audioContext.currentTime + time;
    gainNode.gain.setValueAtTime(0.3, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + 0.3);
  });
};

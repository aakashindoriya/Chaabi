export const playSound = (soundFile) => {
  const audio = new Audio(soundFile);
  audio.play();
};

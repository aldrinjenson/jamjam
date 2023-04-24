export const formatTime = (time) => {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  const milliseconds = ((time % 1000) / 10).toFixed(0);
  return `${minutes}:${seconds.padStart(2, "0")}:${milliseconds.padStart(
    2,
    "0"
  )}`;
};


const scrollToSmoothly = (targetY: number) => {
  window.scrollTo({
    top: targetY,
    behavior: 'smooth',
  });
};

export default scrollToSmoothly;
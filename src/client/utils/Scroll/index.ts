export const scrollUp = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export const scrollDown = () => {
  window.scrollTo({
    top: window.innerHeight - 60,
    left: 0,
    behavior: "smooth",
  });
};

export const scrollToCourses = () => {
  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
};

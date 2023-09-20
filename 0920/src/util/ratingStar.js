export const ratingStar = (rating) => {
  let number = Math.floor(Math.trunc(rating) / 2);
  let half = Math.trunc(rating) % 2 === 1;
  return "⭐️".repeat(number) + "✨".repeat(+half);
};

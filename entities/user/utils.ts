export const splitAndGetFirstLetters = (name: string) => {
  return name
    .split(' ')
    .map((word) => {
      return word[0];
    })
    .slice(0, 1)
    .join('');
};

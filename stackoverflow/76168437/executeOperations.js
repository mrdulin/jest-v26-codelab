export const executeOperation = (operation) => {
  const firstValue = Number(prompt('Enter the first value:'));
  const secondValue = Number(prompt('Enter the second value:'));

  return operation(firstValue, secondValue);
};
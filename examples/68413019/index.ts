export const inputValidation = (phnum, pincode, setvalue) => {
  if (phnum?.length < 10 && setvalue) {
    throw new Error('phnum must be 10 digit');
  }
  if (pincode?.length < 7 && setvalue) {
    throw new Error('zipcode must be 7 digit');
  }
  return true;
};

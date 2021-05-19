export const nameRegex = '^([a-z0-9])([a-z0-9.-]*)$';

export const validateName = (rule, value, callback) => {
  let re = new RegExp(nameRegex);
  if (value && !value.match(re)) {
    callback('name_validation');
  }
  callback();
};

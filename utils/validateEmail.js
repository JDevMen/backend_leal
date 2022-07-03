const isValidEmail = (email) => {
  const emailReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

  return emailReg.test(email);
};

exports.isValidEmail = isValidEmail;

// Helper object for validating forms
// Does not use react or JSX

const FormValidator = {
   checkIfFieldEmpty(formObject) {
    const entries = Object.entries(formObject);
    let value;

    for (let i = 0; i < entries.length; i++) {
      value = entries[i][1];
      if (value === '') {
        return true;
      }
    }

    return false;
  },

  checkValidMobile(mobileNo) {
    let mobileIsValid = true;

    if (mobileNo.length !== 11) {
      mobileIsValid = false;
    }

    return mobileIsValid;
  },

  checkValidEmail(email) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
  }
};

export { FormValidator };

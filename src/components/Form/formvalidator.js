// Helper object for validating forms
// Does not use react or JSX

const FormValidator = {
   checkIfFieldEmpty(form) {
    const entries = Object.entries(form);
    let value;

    for (let i = 0; i < entries.length; i++) {
      value = entries[i][1];
      if (value === '') {
        return true;
      }
    }

    return false;
  }
};

export { FormValidator };

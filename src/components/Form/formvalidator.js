// Helper object for validating forms
// Does not use react or JSX

const FormValidator = {
   checkIfFieldEmpty() {
    const entries = Object.entries(this.state);
    let value;

    for (let i = 0; i < entries.length; i++) {
      value = entries[i][1];
      if (value === '') {
        alert('Please fill out all the fields');
        return true;
      }
    }

    return false;
  }
};

export { FormValidator };

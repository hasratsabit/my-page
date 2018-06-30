
/*************************************
        Name Validations
*************************************/

  // Valid Name Checker
  const validNameChecker = (name) => {
    if(!name) return false; 
    const regExp = new RegExp(/^[a-zA-Z ]+$/);
    return regExp.test(name);
  }

  // Name Length Checker
  const nameLengthChecker = (name) => {
    if(!name) return false;
    if(name.length < 2 || name.length > 20) return false;
    else return true;
  }

  // All Name Validations
  const nameValidators = [
    {
      validator: validNameChecker,
      message: 'The name must not contain numbers and special characters.'
    },
    {
      validator: nameLengthChecker,
      message: 'The name must be at least 2 characters but no longer than 20.'
    }
  ];

/*************************************
        Email Validations
*************************************/

  // Valid Email Checker
  const validEmailChecker = (email) => {
    if(!email) return false;
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email);
  }

  // Email Length Checker
  const emailLengthChecker = (email) => {
    if(!email) return false;
    if(email.length < 2 || email.length > 30) return false;
    else return true;
  }

  // All Email Validators
  const emailValidators = [
    {
      validator: validEmailChecker,
      message: 'Please provide a valid email address.'
    },
    {
      validator: emailLengthChecker,
      message: 'Email should be at least 2 character but not longer than 30.'
    }
  ];


/*************************************
        Username Validations
*************************************/

  // Valid Username Checker
  const validUsernameChecker = (username) => {
    if(!username) return false;
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(username);
  }


  // Username Length Checker
  const usernameLengthChecker = (username) => {
    if(!username) return false;
    if(username.length < 3 || username.length > 15) return false;
    else return true;
  }

  // All Username Validators
  const usernameValidators = [
    {
      validator: validUsernameChecker,
      message: 'Username must not contain special characters.'
    }, {
      validator: usernameLengthChecker,
      message: 'Username must be at least 3 characters but no longer than 15'
    }
  ];


/*************************************
        Password Validations
*************************************/

  // Valid Password Checker
  const validPasswordChecker = (password) => {
    if(!password) return false;
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    return regExp.test(password);
  }

  // Password Length Checker
  const passwordLengthChecker = (password) => {
    if(!password) return false;
    if(password.length < 8 || password.length > 30) return false;
    else return true;
  }

  // All Password Validaitons
  const passwordValidators = [
    {
      validator: validPasswordChecker,
      message: 'Password must contain at least 1 lowercase, 1 uppercase, 1 number, and 1 special character.'
    }, {
      validator: passwordLengthChecker,
      message: 'Password must be at least 8 characters but not longer than 30'
    }
  ]

module.exports = {
  nameValidators,
  emailValidators,
  usernameValidators,
  passwordValidators
}
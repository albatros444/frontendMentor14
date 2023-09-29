const form = document.forms[0];
// const form2 = document.querySelector(".rightSide__form");
const fnameField = form.elements["fnameInput"];
const lnameField = form.elements["lnameInput"];
const emailField = form.elements["emailInput"];
const passwordField = form.elements["passwordInput"];

const errField1 = document.querySelector(".fnErrMessage");
const errField2 = document.querySelector(".lnErrMessage");
const errField3 = document.querySelector(".pErrMessage");
const errField4 = document.querySelector(".emErrMessage");

const showErrorMessage = (errField, inputName, type) => {
  let message;
  if (type === "noValue") {
    message = `${inputName} cannot be empty`;
  } else if (type === "wrongEmail") {
    message = `Looks like this is not an email`;
  }
  errField.innerText = message;
};

const removeErrorMessage = (errField, name) => {
  errField.innerText = "";
  name.classList.remove("errorInput");
};

const validateEmail = (input) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(input);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let check1;
  let check2;
  let check3;
  let check4;
  if (fnameField.value.trim() === "") {
    showErrorMessage(errField1, "Firts Name", "noValue");
    fnameField.classList.add("errorInput");
    fnameField.placeholder = "";
  } else {
    removeErrorMessage(errField1, fnameField);
    check1 = true;
  }

  if (lnameField.value.trim() === "") {
    showErrorMessage(errField2, "Last Name", "noValue");
    lnameField.classList.add("errorInput");
    lnameField.placeholder = "";
  } else {
    removeErrorMessage(errField2, lnameField);
    check2 = true;
  }

  if (passwordField.value.trim() === "") {
    showErrorMessage(errField3, "Password", "noValue");
    passwordField.classList.add("errorInput");
    passwordField.placeholder = "";
  } else {
    removeErrorMessage(errField3, passwordField);
    check3 = true;
  }

  if (emailField.value.trim() === "") {
    showErrorMessage(errField4, "Email", "noValue");
    emailField.classList.add("errorInput");
    emailField.placeholder = "";
  } else {
    const isVal = validateEmail(emailField.value.trim());

    if (!isVal) {
      showErrorMessage(errField4, "Email", "wrongEmail");
      emailField.classList.add("errorInput");
    } else {
      removeErrorMessage(errField4, emailField);
      check4 = true;
    }
  }
  check1 && check2 && check3 && check4 && form.submit();
});

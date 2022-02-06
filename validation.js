//animate button (ripple)
(function () {
  const inputs = document.querySelectorAll("input");
  const info = document.querySelector("#info");
  const email = document.querySelector("#email");
  const country = document.querySelector("#country");
  const zip = document.querySelector("#zip");
  const pass = document.querySelector("#pass");
  const secondPass = document.querySelector("#secondPass");
  const form = document.querySelector("form");
  // probably cannot use regex for secondPass element, recommend some js with a css toggle
  // idk email sometimes doesn't validate correctly.
  inputs.forEach(inp => {
    inp.addEventListener("click", () => {
      inp.classList.add("touched");
      switch (document.activeElement) {
        case email:
          info.textContent =
            'Email needs to be: "any character->@gmail->.(domain)"';
          break;
        case country:
          info.textContent =
            "Must start with capital letter, can include spaces and words";
          break;
        case zip:
          info.textContent =
            "alphanumeric, between 5 and 8 characters";
          break;
        case pass:
          info.textContent =
            "Must have at least one of: lowercase,capital constter and number.Minimum of 8 characters";
          break;
        case secondPass:
          info.textContent = "Must replicate password";
          break;
      }
    });
    inp.addEventListener("input", e => {
      if(inp.checkValidity()){
        inp.setCustomValidity("");
        return;
      }
      //can maybe toggle valid pseudoclass programmtically?
      switch (false) {
        case email.checkValidity():
          email.setCustomValidity("I am expecting an e-mail address!");
          break;
        case country.checkValidity():
          country.setCustomValidity("do you live in a country?");
          break;
        case zip.checkValidity():
          zip.setCustomValidity("zip code por fi");
          break;
        case pass.checkValidity():
          pass.setCustomValidity("Password...");
          break;
        case secondPass:
          secondPass.setCustomValidity("Dissimilar To Password");
          break;
      }
      inp.reportValidity()
      // setTimeout(inp.setCustomValidity(""),5000);
    });
  });
  form.addEventListener("submit", event => {
    if (inputs.every((el) => el.validity.valid)) {
      info.textContent = "";
      return;
    }
    info.textContent = "Not Submitted, a field was invalid";
    // event.stopPropagation();
    event.preventDefault();

  });
})();

const auth = new AuthService();
const message = new Message();
message.init();
//Registration UI
const registrationForm = document.forms["signUpForm"];
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById("password");
const nickname = document.getElementById("nick_name");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const phone = document.getElementById("phone");
const gender_orientation = document.getElementById("gender");
const city = document.getElementById("city");
const country = document.getElementById("country");
const date_of_birth_day = document.getElementById("day_of_birth");
const date_of_birth_month = document.getElementById("month_of_birth");
const date_of_birth_year = document.getElementById("year_of_birth");

//Registration handler
registrationForm.addEventListener("submit", submitRegForm);

function submitRegForm(e){
  e.preventDefault();

  const validation = new Validation(registrationForm);
  validation.init();

  if(!validation.check()) return console.error("Validation error.");

  auth.registrate(emailInput.value, passwordInput.value, nickname.value, first_name.value, last_name.value, phone.value, gender_orientation.value, city.value, country.value, date_of_birth_day.value, date_of_birth_month.value, date_of_birth_year.value)
    .then((result) => {
      if (!result.error) {
        window.location = "login.html"
      } else {
        message.show({text: result.message, error: result.error});
      }
    })
}
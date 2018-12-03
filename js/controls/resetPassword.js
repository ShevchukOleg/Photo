//Change password UI
const forgotPasswordForm = document.forms["changePassword"];
const emailForResetInput = forgotPasswordForm.elements["emailForReset"];
const btn = form.querySelector("button[data-toggle]")

forgotPasswordForm.addEventListener("submit", modifyPassword);

/**
 * modifyPassword - обаботчие ресета на форме сброса пароля
 * @param {Event} e 
 */
function modifyPassword(e) {
  e.preventDefault();
  
  // btn.modal('toggle');

  const validation = new Validation(forgotPasswordForm);
  validation.init();

  if (!validation.check()) return console.error("Validation error.");

  auth.resetPassword(emailForResetInput.value)
    .then ((res) => {
      if (!res.error) {
        message.show({text: res.message, error: res.error})
    } else {
        message.show({text: res.message, error: res.error});
    }
    });
}

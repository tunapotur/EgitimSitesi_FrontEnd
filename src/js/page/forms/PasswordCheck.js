// https://github.com/validatorjs/validator.js
// import isEmail from 'validator/es/lib/isEmail';
import isStrongPassword from 'validator/es/lib/isStrongPassword';
import equals from 'validator/es/lib/equals';
import { fadeIn, fadeOut } from '../../animation/fade';

class PasswordCheck {
  //* Elements
  #elNewPass;
  #elCheckPass;
  //parent
  #elNewPass_parent;
  #elCheckPass_parent;
  // message
  #elNewPass_message_accept;
  #elNewPass_message_deny;
  #elCheckPass_message_accept;
  #elCheckPass_message_deny;

  //* Class Names
  #classFocus_accept = 'frmValidate__input-focus--accept';
  #classFocus_deny = 'frmValidate__input-focus--deny';
  #classMessage_accept = 'frmValidate__input-msg--accept';
  #classMessage_deny = 'frmValidate__input-msg--deny';

  //*misc variable
  #duration;

  constructor(elNewPass, elCheckPass, duration = 250) {
    //* New Password
    this.#elNewPass = elNewPass;
    this.#elNewPass_parent = this.#elNewPass.parentElement;
    this.#elNewPass_message_accept = this.#elNewPass_parent.querySelector(`.${this.#classMessage_accept}`);
    this.#elNewPass_message_deny = this.#elNewPass_parent.querySelector(`.${this.#classMessage_deny}`);

    //* Check Password
    this.#elCheckPass = elCheckPass;
    this.#elCheckPass_parent = this.#elCheckPass.parentElement;
    this.#elCheckPass_message_accept = this.#elCheckPass_parent.querySelector(`.${this.#classMessage_accept}`);
    this.#elCheckPass_message_deny = this.#elCheckPass_parent.querySelector(`.${this.#classMessage_deny}`);

    // misc value init
    this.#duration = duration;
  }

  #addClass_accept(el) {
    el.classList.add(this.#classFocus_accept);
    el.classList.remove(this.#classFocus_deny);
  }

  #addClass_deny(el) {
    el.classList.remove(this.#classFocus_accept);
    el.classList.add(this.#classFocus_deny);
  }

  #removeClass_acceptDeny(el) {
    el.classList.remove(this.#classFocus_accept);
    el.classList.remove(this.#classFocus_deny);
  }

  #setElement_accept(elAccept, elDenay, duration) {
    fadeIn(elAccept, { duration });
    fadeOut(elDenay, { duration });
  }

  #setElement_deny(elAccept, elDenay, duration) {
    fadeIn(elDenay, { duration });
    fadeOut(elAccept, { duration });
  }

  #unSetElement_acceptDenay(elAccept, elDenay, duration) {
    fadeOut(elDenay, { duration });
    fadeOut(elAccept, { duration });
  }

  #newPass_focus() {
    const inputText = this.#elNewPass.value;
    inputText.length !== 0
      ? isStrongPassword(inputText)
        ? this.#addClass_accept(this.#elNewPass)
        : this.#addClass_deny(this.#elNewPass)
      : this.#removeClass_acceptDeny(this.#elNewPass);
  }

  #newPass_message() {
    const inputText = this.#elNewPass.value;
    inputText.length !== 0
      ? isStrongPassword(inputText)
        ? this.#setElement_accept(this.#elNewPass_message_accept, this.#elNewPass_message_deny, this.#duration)
        : this.#setElement_deny(this.#elNewPass_message_accept, this.#elNewPass_message_deny, this.#duration)
      : this.#unSetElement_acceptDenay(this.#elNewPass_message_accept, this.#elNewPass_message_deny, this.#duration);
  }

  #checkPass_clearInput() {
    if (this.#elCheckPass.value !== 0) {
      this.#elCheckPass.value = '';
      this.#elCheckPass.classList.remove(this.#classFocus_accept);
      this.#elCheckPass.classList.remove(this.#classFocus_deny);
      this.#elCheckPass.nextElementSibling.children.forEach(el => {
        fadeOut(el, { duration: this.#duration });
      });
    }
  }

  #checkPass_focus() {
    const newPass_inputText = this.#elNewPass.value;
    const checkPass_inputText = this.#elCheckPass.value;

    checkPass_inputText.length !== 0
      ? equals(checkPass_inputText, newPass_inputText)
        ? this.#addClass_accept(this.#elCheckPass)
        : this.#addClass_deny(this.#elCheckPass)
      : this.#removeClass_acceptDeny(this.#elCheckPass);
  }

  #checkPass_message() {
    const newPass_inputText = this.#elNewPass.value;
    const checkPass_inputText = this.#elCheckPass.value;

    checkPass_inputText.length !== 0
      ? equals(checkPass_inputText, newPass_inputText)
        ? this.#setElement_accept(this.#elCheckPass_message_accept, this.#elCheckPass_message_deny, this.#duration)
        : this.#setElement_deny(this.#elCheckPass_message_accept, this.#elCheckPass_message_deny, this.#duration)
      : this.#unSetElement_acceptDenay(
          this.#elCheckPass_message_accept,
          this.#elCheckPass_message_deny,
          this.#duration
        );
  }

  newPass_oparations = () => {
    this.#newPass_focus();
    this.#newPass_message();
    this.#checkPass_clearInput();
  };

  checkPass_operations = () => {
    this.#checkPass_focus();
    this.#checkPass_message();
  };
}

export default PasswordCheck;

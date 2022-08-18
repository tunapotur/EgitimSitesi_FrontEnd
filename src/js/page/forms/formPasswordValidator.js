import ifCorrectPage from '../../functions/ifCorrectPage';
import PasswordCheck from './PasswordCheck';

ifCorrectPage(document.getElementById('frmPass'), () => {
  const newPass = document.getElementById('frmPass_newPassword');
  const newPassCheck = document.getElementById('frmPass_newPasswordCheck');

  const passCheck = new PasswordCheck(newPass, newPassCheck, 250);

  newPass.addEventListener('input', passCheck.newPass_oparations);
  newPassCheck.addEventListener('input', passCheck.checkPass_operations);
});

ifCorrectPage(document.getElementById('frmResetPass'), () => {
  const newPass = document.getElementById('frmPass_newPassword');
  const newPassCheck = document.getElementById('frmPass_newPasswordCheck');

  const passCheck = new PasswordCheck(newPass, newPassCheck, 250);

  newPass.addEventListener('input', passCheck.newPass_oparations);
  newPassCheck.addEventListener('input', passCheck.checkPass_operations);
});

ifCorrectPage(document.getElementById('frmSignUp'), () => {
  const newPass = document.getElementById('frmPass_newPassword');
  const newPassCheck = document.getElementById('frmPass_newPasswordCheck');

  const passCheck = new PasswordCheck(newPass, newPassCheck, 250);

  newPass.addEventListener('input', passCheck.newPass_oparations);
  newPassCheck.addEventListener('input', passCheck.checkPass_operations);
});

export const checkPasswordStrength = (setPasswordSecurityLevel, password) => {
  let newPasswordSecurityLevel = 0;
  if (password.length >= 8) newPasswordSecurityLevel++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password))
    newPasswordSecurityLevel++;
  if (/\d/.test(password)) newPasswordSecurityLevel++;
  if (/[@$!%*?&]/.test(password)) newPasswordSecurityLevel++;
  setPasswordSecurityLevel(newPasswordSecurityLevel);
};